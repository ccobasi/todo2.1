const deleteItem = (element) => {
  element.parentElement.parentElement.remove();
};

module.exports = deleteItem;