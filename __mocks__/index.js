const listDiv = document.createElement('div');

for (let i = 0; i < 5; i += 1) {
  const itemSpan = document.createElement('span');
  const itemButton = document.createElement('button');
  const itemDiv = document.createElement('div');
  itemSpan.appendChild(itemButton);
  itemDiv.appendChild(itemSpan);
  listDiv.appendChild(itemDiv);
}

export { listDiv as default };