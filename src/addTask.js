const addTask = (task) => {
  const newTask = document.createElement('ul');
  newTask.classList.add('mini-section');
  newTask.classList.add('item');
  newTask.setAttribute('draggable', 'true');
  newTask.innerHTML = `
    <li>${task}</li>
    `;
  document.body.appendChild(newTask);
};

module.exports = addTask;