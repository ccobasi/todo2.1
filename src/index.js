import './style.css';

const list = [
  {
    index: 0,
    description: 'Do laundry',
    completed: true,
  },
  {
    index: 1,
    description: 'Go swimming',
    completed: false,
  },
  {
    index: 2,
    description: 'Get grosseries',
    completed: false,
  },

];

const todoList = document.querySelector('.todoList');

const displayList = (list) => {
  todoList.innerHTML = '';
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.innerHTML = `
    
      <div class="mini-section item">
      <input class="check" type="checkbox" id="todo-description" name="todo-description" value="${e.index}">${e.description}
      <i class="fas fa-ellipsis-v" style="color: gray; float: right;"></i>
      </div>
      `;

    todoList.appendChild(lists);
  });
};

displayList(list);
