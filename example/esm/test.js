import { test, assert } from 'gubb';

test('this is a test', () => {
  assert("right now, i'm someone else", () => true);
});
