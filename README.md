# gubb &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![npm version](https://img.shields.io/npm/v/gubb.svg?style=flat)](https://www.npmjs.com/package/gubb) [![Actions Status](https://github.com/joglr/gubb/workflows/build/badge.svg)](https://github.com/joglr/gubb/actions) [![Actions Status]

A very minimalistic Node.js test runner.

## Installation

Install the package with npm (or yarn)

```
npm install gubb --save-dev
```

## Getting started

### Defining your tests

To get started, add your first test file to the project. A test file is a javascript file, containing calls to [`test`](#test) and `assert`](#assert). In this example, the file [`test.js`](example/esm/test.js) is added to the root of the project.

#### [With ESM](example/esm) (recommended)

If you use the [`esm`]() package or node version 12 or later, you can import the named exports of gubb like so:

```javascript
import { test, assert } from 'gubb';
```

Then add your test cases.

```javascript
// test.js
import { test, assert } from 'gubb';

function myFunction() {
  return true;
}

test('my first test', () => {
  const result = myFunction();

  assert('that it returns true', () => {
    return result === true;
  });
});
```

### Running your tests

To run your test, add a `test` entry to the scripts section of your `package.json`

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "node -r esm test.js"
  },
  "devDependencies": {
    "esm": "*"
  }
}
```

_For node version 12 or later, use this instead:_

```json
{
  "name": "my-package",

  ...
  "type": "module",
  "scripts": {
    "test": "node --experimental-modules test.js"
  }
}
```

Now you can run your test suite on the commandline or in [CI](https://en.wikipedia.org/wiki/Continuous_integration) with

npm test

### [Node](example/node) with --experimental-modules flag

When using the native ES module loader from node, [named exports are not available for node<12](TODO: ADD LINK)

```javascript
import * as gubb from 'gubb';
const { test, assert } = gubb.default;

// Tests go here
```

### [Node, legacy](example/node-10)

```javascript
const { test, assert } = require('gubb');

// Tests go here
```

## API

gubb exports two functions: [`test`](#test) and [`assert`](#assert).

### `test`

--
The `test` function is used to group assertions into a test.

Syntax: `test(testName: String, testFunction: Function)`

**Example:**

```javascript
test('myFunction', () => {
  // Assertions go here
});
```

### `assert`

`assert` is used to make assertions.

Syntax: `assert(description: String, conditionFunction: Function)`

`assert` takes two parameters: a description and a condition function.

**Example:**

```javascript
test('isNotFriday', () => {
  assert(() => {
    const isFriday = new Date().getDay() === 5;
    return isFriday;
  });
});
```

The condition function is the function that tests your code.
In here, you add logic that assures that your code runs properly.
This function should return a boolean, whether the test passed. Alternatively, if the function throws an error, the test is considered failed. If you want to throw inside this function, remember to use a `try/catch` block, to prevent the error from failing the whole test.

# Contributing

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

Inspired by [this tweet](https://twitter.com/ryanflorence/status/1162792430422200320) by [`@ryanflorence`](https://twitter.com/ryanflorence)
