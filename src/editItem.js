function editItem(taskList, index, newDescription) {
  const idx = parseInt(index, 10);

  taskList[idx].description = newDescription;
  return taskList;
}

module.exports = editItem;