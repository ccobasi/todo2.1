// /* eslint-disable import/no-cycle */
// import { tasks, saveChanges, saveLocalstorage } from './drag.js';
// import { tasksList } from './index.js';

// const addTask = (task) => {
//   const newTask = document.createElement('div');
//   newTask.classList.add('mini-section');
//   newTask.classList.add('item');
//   newTask.setAttribute('draggable', 'true');
//   newTask.innerHTML = `
//   <span>
//   <input class='check' type='checkbox' id='task-description' name='task-description' value='${task}'>${task}
//   <i class="fas fa-ellipsis-v ellipsis" style="color: gray; float: right;"></i>
//   </span>
//   `;
//   tasksList.appendChild(newTask);
//   saveChanges();
//   saveLocalstorage(tasks);
//   document.location.reload(true);
// }

// export{addTask};

// delete task function
// function deleteTask(index){
//   let getLocalStorageData = localStorage.getItem("list");
//   list = JSON.parse(getLocalStorageData);
//   list.splice(index, 1); //delete or remove the li
//   localStorage.setItem("New Todo", JSON.stringify(list));
//   displayList(list); //call the displayList function
// }

// export {deleteTask};