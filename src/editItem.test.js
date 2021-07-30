import tasklist from '../__mocks__/tasklist.js';

const editItem = require('./editItem.js');

describe('editItem function', () => {
  test('item updated correctly', () => {
    const itemId = 0;
    const editString = 'Do coding challenge';

    const list = editItem(tasklist, itemId, editString);

    expect(list[0].description).toBe(editString);
  });
});