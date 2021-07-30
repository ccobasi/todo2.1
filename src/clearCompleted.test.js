import tasklist from '../__mocks__/tasklist.js';
import clearAll from './clearCompleted.js';

describe('clearAll function test', () => {
  test('Items cleared properly', () => {
    const testList = clearAll(tasklist);

    expect(testList.filter((task) => task.completed === true)).toHaveLength(0);
  });
});