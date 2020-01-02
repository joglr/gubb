const { test, assert } = require('gubb');

test('this is a test', () => {
  assert("right now, i'm someone else", () => true);
});
