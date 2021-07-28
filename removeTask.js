const deleteAll = () => {
    clearAll.addEventListener('click', (e) => {
        e.preventDefault();
        list = list.filter((task) => task.completed === false);
        saveLocalstorage();
        document.location.reload(true);
    })
}

module.exports = deleteAll;