/* eslint-disable import/no-mutable-exports */
import addTask from './addTask.js';
export let list = [];

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

if (localStorage.getItem('list')) {
  const getList = JSON.parse(localStorage.getItem('list'));
  list = getList;
}

/// Code for local Storage Save.

export const saveLocalstorage = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

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

export { addListeners };
