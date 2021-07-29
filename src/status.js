function UpdateStatus(index, list) {
  const checkStatus = document.querySelectorAll('.checkbox');

  list[index].completed = checkStatus[index].checked;
}

export default UpdateStatus;