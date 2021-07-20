import './style.css';
import {reloadContainer,addListeners,dragOver,list} from './drag.js';
import { getContainer } from './complete.js';

// export const list = [
//   {
//     index: 0,
//     description: 'Do laundry',
//     completed: true,
//   },
//   {
//     index: 1,
//     description: 'Go swimming',
//     completed: false,
//   },
//   {
//     index: 2,
//     description: 'Do challenge',
//     completed: false,
//   },

// ];

// if (localStorage.getItem('list')) {
//   const getList = JSON.parse(localStorage.getItem('list'));
//   list = getList;
// }

const todoList = document.querySelector('.todoList');

const displayList = (list) => {
  todoList.innerHTML = '';
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.classList.add('mini-section');
    lists.classList.add('item');
    lists.setAttribute('draggable', 'true')
    lists.innerHTML = `
      <span>
      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}'>${e.description}
      <i class="fas fa-ellipsis-v" style="color: gray; float: right;"></i>
      </span>
      `;

    todoList.appendChild(lists);
  });
};

displayList(list);
getContainer(todoList);
const items = document.querySelectorAll('.item');

addListeners(items);
dragOver(todoList);
reloadContainer(items);