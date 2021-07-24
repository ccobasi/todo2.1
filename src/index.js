/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */

import {
  reloadContainer,
  addListeners,
  dragOver,
  list,
  deleteItem,
  deleteAll,
  inputListener,
} from './drag.js';
import './style.css';
import { getContainer } from './complete.js';
import editListener from './edit.js';

export const todoList = document.querySelector('.todoList');
export const clearAll = document.querySelector('.clear-all');

const task = document.querySelector('.task');
export const showTask = (list) => {
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.classList.add('mini-section');
    lists.classList.add('item');
    lists.setAttribute('draggable', 'true');
    if (e.completed === true) {
      lists.innerHTML = `
      <span class='desc'>
      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}' checked = true>${e.description}</input>
      <i class="fas fa-trash" style="color: black; float: right;"></i>
      <i class="fas fa-ellipsis-v ellipsis" style="color: gray; float: right;"></i>
      </span>
      `;
    } else {
      lists.innerHTML = `
      <span>
      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}'>${e.description}</input>
      <i class="fas fa-trash" style="color: black; float: right;"></i>
      <i class="fas fa-ellipsis-v ellipsis" style="color: gray; float: right;"></i>
      </span>
      `;
    }

    todoList.appendChild(lists);
  });
};

showTask(list);
getContainer(todoList);
export const items = document.querySelectorAll('.item');
export const del = document.querySelector('.fa-trash');
inputListener(task);
editListener();
addListeners(items);
dragOver(todoList);
reloadContainer(items);
deleteItem();
deleteAll();
