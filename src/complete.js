/* eslint-disable import/prefer-default-export */
import { saveChanges } from './drag.js';

// Checks if input are checked or not, and Add Or remove Css Class => The line through style.
const getContainer = (newContainer) => {
  const d = [...newContainer.querySelectorAll('input')];
  d.forEach((input) => {
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        input.parentNode.classList.add('desc');
        saveChanges();
      } else {
        input.parentNode.classList.remove('desc');
        saveChanges();
      }
    });
  });
};

export { getContainer };