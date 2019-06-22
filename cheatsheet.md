# Cheatsheet

## Run / Open

UI

```
npx cypress open
```

Headless mode

```
npx cypress run
```


## Seeds

Generate some seeds for test data

```
npx sequelize seed:generate --name e2e-data
```

Run seeds:

```
npx sequelize db:seed --seed <name-of-seed-file> 
```

Rollback

```
npx sequelize db:seed:undo --seed <name-of-seed-file>
```

## Checking the DB

```
sqlite3 store.sqlite
```

Then 

```
select * from authors;
select * from books;
```

## Environment variables


* On the command line when you run tests
* `--env` on the command line
* Via cypress.json in “env” json object
* Setting environment variable on the environment
* Via `cypress.env.json`

### Command line:
(CYPRESS_ should be prefixed on environment variables on the command line)

```
$CYPRESS_baseUrl=http://xxx:3000 npx cypress open
```
### --env on command line

```
npx cypress open --env host=http://dev.local:3000
```

Test:

```
Cypress.env('host') + path
```

### cypress.json file

```
{
  "baseUrl": "http://localhost:3000",
  "env": {
    "host": "http://dev.local:3000"
  }
}
```

Test:

```
Cypress.env('host') + path
```

## Commands

```
Cypress.Commands.add(name, options, callbackFn)
```

Define:

```
Cypress.Commands.add('login', (username, password) => {
  // go to login page
  cy.visit('/login', { timeout: 10000 });

  // enter required fields and submit
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('[data-cy=login]').click({ position: 'topLeft' });
});
```

Usage:

```
cy.login(username, password);
```

## Assertions

```
cy.get('li.book').should('have.length', 3)
```

## Calling exec commands

```
cy.exec('echo hi')
```

## BeforeEach

```
  beforeEach(() => {
    // do something
  });
```

## Calling tasks

```
cy.task(event)
cy.task(event, arg)
cy.task(event, arg, options)
```

Define in `plugins/index.js`

```
module.exports = (on, config) => {
  on('task', {
    'e2e-seed-db': () => {
      // do something
      return true;
    }
  })
}
```

Usage:

```
cy.task('e2e-seed-db', args, { timeout: 20000 });
```

## Selecting elements

```
cy.visitPage("/some-route").then(() => {
  cy.get('[data-hook="card-0"]', {
    timeout: 20000
  }).should("be.visible");
});
```