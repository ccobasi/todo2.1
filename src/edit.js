/* eslint-disable import/no-cycle */
import { items } from './index.js';
import { saveChanges, list } from './drag.js';

export default function editListener() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('dblclick', () => {
      const oldValue = items[i].children[0].children[0];
      const oldElement = items[i].children[0].children[0].nextSibling.nextSibling;
      oldElement.remove();
      items[i].children[0].children[0].nextSibling.remove();
      const newInput = document.createElement('input');
      const icon = document.createElement('i');
      icon.classList.add('fa', 'fa-trash', 'trash');
      items[i].firstChild.nextSibling.removeChild(items[i].children[0].children[0]);
      newInput.placeholder = oldValue.value;
      items[i].children[0].insertBefore(newInput, items[i].children[0].children[0]);
      items[i].children[0].insertBefore(icon, items[i].children[0].children[0]);

      newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          if (newInput.value.trim() === '') {
            newInput.classList.add('invalid');
          } else {
            items[i].children[0].id = i;
            newInput.setAttribute('description', newInput.value);
            items[i].firstChild.nextSibling.removeChild(items[i].children[0].children[0]);

            items[i].firstChild.nextSibling.innerHTML = `
           <input class='check' type='checkbox' id='task-description' name='task-description' value='${newInput.value}'>${newInput.value}
           <i class="fas fa-ellipsis-v ellipsis" style="color: gray; float: right;"></i>
          `;
            list[i].description = newInput.value;
            list[i].completed = false;
            saveChanges();
          }
        }
      });

      icon.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        saveChanges();
        document.location.reload(true);
      });
    });
  }
}