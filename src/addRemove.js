/* eslint-disable import/no-cycle */
import { list, saveChanges, saveLocalstorage } from './drag.js';
import { todoList, del } from './index.js';

export default function addTask(task) {
  todoList.innerHTML = '';
  const newTask = document.createElement('div');
  newTask.classList.add('mini-section');
  newTask.classList.add('item');
  newTask.setAttribute('draggable', 'true');
  newTask.innerHTML = `
      <span>
      <input class='check' type='checkbox' id='task-description' name='task-description' value='${task}'>${task}
      <i class="fas fa-ellipsis-v ellipsis" style="color: gray; float: right;"></i>
      </span>
      `;
  todoList.appendChild(newTask);
  saveChanges();
  saveLocalstorage(list);
  document.location.reload(true);
}

export const deleteItem = () => {
  del.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    saveChanges();
    document.location.reload(true);
  });
};
