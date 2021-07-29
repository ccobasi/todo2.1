/**
 * @jest-environment jsdom
 */
import listDiv from '../__mocks__/index.js';

const deleteItem = require('./removeTask.js');

describe('Remove task', () => {
  document.body.innerHTML = '';
  test('Second test', () => {

    const testButton = listDiv.children[0].children[0].children[0];

    deleteItem(testButton);

    expect(listDiv.children).toHaveLength(4);
  });
});