import * as gubb from 'gubb';
const { test, assert } = gubb.default;

test('test 1', () => {
  assert('yay', () => true);
});
