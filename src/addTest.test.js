/**
 * @jest-environment jsdom
 */
const addTask = require('./addTask');

describe('Add new task', () => {
  test('First test', () => {
    document.body.innerHTML = '';
    const task = 'Go to gym';
    addTask(task);
    const list = document.querySelectorAll('.item li');
    expect(list).toHaveLength(1);
  });
});