import { test, assert } from 'gubb/dist/gubb.esm';

test('this is a test', () => {
  assert("right now, i'm someone else", () => true);
});
