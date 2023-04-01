//your code here
const container = document.querySelector('.container');
let draggingDiv = null;

// Drag Start Event
container.addEventListener('dragstart', (e) => {
  draggingDiv = e.target;
});

// Drag Over Event
container.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// Drop Event
container.addEventListener('drop', (e) => {
  e.preventDefault();
  const dropDiv = e.target;
  if (dropDiv !== draggingDiv && dropDiv.nodeName === 'DIV') {
    const temp = dropDiv.style.backgroundImage;
    dropDiv.style.backgroundImage = draggingDiv.style.backgroundImage;
    draggingDiv.style.backgroundImage = temp;
  }
});