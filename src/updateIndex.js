function updateIndex(taskList, index1, index2) {
    const temp = taskList[index1];
    
    taskList[index1] = taskList[index2];

    taskList[index2] = temp;
}

module.exports = updateIndex;