# gubb

A very minimalistic testing library.

## Usage

gubb can be used in the following ways (see [example](/example/) folder):

### [Node (ESM, recommended)](example/esm)

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

### [Node (with --experimental-modules flag)](example/node)

When using the native ES module loader from node, [named exports are not available yet](TODO: ADD LINK)

```javascript
import * as gubb from 'gubb';
const { test, assert } = gubb.default;

// Tests go here
```

### [Node (legacy)](example/node-legacy)

```javascript
const { test, assert } = require('gubb');

// Tests go here
```

## API

gubb exports two functions: [`test`](#test) and [`assert`](assert).

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

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

Inspired by this tweet by [`@ryanflorence`](https://twitter.com/ryanflorence)

![https://twitter.com/ryanflorence/status/1162792430422200320](https://user-images.githubusercontent.com/1959615/70811149-53358280-1dc5-11ea-88e9-1887c09bb9f6.png)
