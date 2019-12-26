import { test, assert } from '../src';

// const log = global.console.log;
let logMock;

function getLastLog() {
  return logMock.mock.calls[0][0];
}

describe('test', () => {
  const mockFn = jest.fn();
  it('calls test function', () => {
    test('hey', mockFn);
    expect(mockFn).toHaveBeenCalled();
  });

  it('throws when errors are thrown within test', () => {
    expect(() => {
      test('this', () => {
        throw Error('failure');
      });
    }).toThrow();
  });
});

beforeEach(() => {
  logMock = jest.fn();
  global.console.log = logMock;
});

describe('assert', () => {
  it('calls the passed condition function', () => {
    const conditionMockFn = jest.fn(() => true);
    assert('test', conditionMockFn);
    expect(conditionMockFn).toHaveBeenCalledWith();
  });

  it.todo('warns if conditions does not return a boolean');

  it('passes if condition is true', () => {
    assert('this', () => true);
    expect(getLastLog()).toMatch(/PASS/);
  });

  it('fails if condition is false', () => {
    const mockFn = jest.fn();
    const mockExitFn = () => mockFn();
    assert('this', () => false, mockExitFn);

    expect(getLastLog()).toMatch(/FAIL/);
    expect(mockFn).toHaveBeenCalled();
  });

  it('catches errors thrown from', () => {
    const mockFn = jest.fn();
    const mockExitFn = () => mockFn();

    assert(
      'this',
      () => {
        throw Error('failure');
      },
      mockExitFn
    );

    expect(mockFn).toHaveBeenCalled();
  });
});
