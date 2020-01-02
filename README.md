# gubb &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![npm version](https://img.shields.io/npm/v/gubb.svg?style=flat)](https://www.npmjs.com/package/gubb) [![Actions Status](https://github.com/joglr/gubb/workflows/node-12/badge.svg)](https://github.com/joglr/gubb/actions) [![Actions Status](https://github.com/joglr/gubb/workflows/node-10/badge.svg)](https://github.com/joglr/gubb/actions) [![Actions Status](https://github.com/joglr/gubb/workflows/node-8/badge.svg)](https://github.com/joglr/gubb/actions) 

A very minimalistic Node.js test runner.

## Installation

Install with npm (or yarn) 

```
npm install gubb --save-dev
```

## Usage

gubb can be used in the following ways (see [example](/example/) folder):

### [With ESM](example/esm) (recommended)
If you use ESM, you can use the named exports like so:

```javascript
/* test.js
 *
 * Run with `node -r esm test.js`
 */

import { test, assert } from 'gubb';

// Tests go here
test('my first test', () => {
  assert('that it works', () => true);
});
```

### [Node](example/node) with --experimental-modules flag

When using the native ES module loader from node, [named exports are not available for node<12](TODO: ADD LINK)

```javascript
import * as gubb from 'gubb';
const { test, assert } = gubb.default;

// Tests go here
```

### [Node, legacy](example/node-legacy)

```javascript
const { test, assert } = require('gubb');

// Tests go here
```

## API

gubb exports two functions: [`test`](#test) and [`assert`](#assert).

### `test()`

The `test` function is used to group assertions into a test, while `assert` is used to make assertions.

`test(testName, testFunction)`

### `assert()`

`assert` is used to make assertions.
`assert` takes two parameters: a description and a condition function.
The condition function is the function that tests your code.
In here, you add logic that assures that your code runs properly.
This function should a boolean, whether the test passed. Alternatively, if the function throws an error, the test is considered failed. If you want to throw inside this function, remember to use a `try/catch` block, to prevent the error from failing the whole test.

`assert(description, conditionFunction)`

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
