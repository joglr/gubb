import { test, assert } from './../../';

test('this is a test', () => {
  assert("right now, i'm someone else", () => true);
});
