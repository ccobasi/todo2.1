// Initials tasks
/* eslint-disable import/no-mutable-exports,  */
/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */

import { clearAll, del } from './index.js';
import addTask from './addRemove.js';

export let list = [];

if (localStorage.getItem('list')) {
  const getList = JSON.parse(localStorage.getItem('list'));
  list = getList;
}

// Add Drag-start and drag-End listeners --- Add Css Class
const addListeners = (elements) => {
  elements.forEach((item) => {
    item.addEventListener('dragstart', () => {
      item.classList.add('dragging');

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
  });
};

/// Code for local Storage Save.

export const saveLocalstorage = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

// Help save any changes in real time (Save position after DragDrop, etc...)
//----------------------

export const saveChanges = () => {
  const newList = [];
  const listTasks = document.querySelectorAll('.item');
  if (listTasks.length === 0) {
    list = [];
    saveLocalstorage(list);
  } else {
    for (let i = 0; i < listTasks.length; i += 1) {
      newList.push({
        index: i + 1,
        description: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.value,
        completed: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.checked,
      });

      list = newList;
      saveLocalstorage(list);
    }
  }
};

export const inputListener = (input) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(input.value);
    }
  });
};

export const reloadContainer = (elements) => {
  elements.forEach((item) => {
    item.addEventListener('drop', () => {
      saveChanges();
    });
  });
};

// ----------------

// Get the element just after the location of the mouse
export const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

// Add event listener DragOver to dragzone
export const dragOver = (container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
};

export const deleteItem = () => {
  del.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    saveChanges();
    document.location.reload(true);
  });
};

export const deleteAll = () => {
  clearAll.addEventListener('click', (e) => {
    e.preventDefault();
    list = list.filter((task) => task.completed === false);
    saveLocalstorage();
    document.location.reload(true);
  });
};

export { addListeners };