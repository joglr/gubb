import * as gubb from 'gubb';
const { test, assert } = gubb.default;

test('this is a test', () => {
  assert("right now, i'm someone else", () => true);
});
