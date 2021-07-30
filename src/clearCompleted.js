function clearAll(taskList) {
  return taskList.filter((task) => task.completed === false);
}

module.exports = clearAll;