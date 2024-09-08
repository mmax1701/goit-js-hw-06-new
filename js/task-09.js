function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget')
const color = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', onClick)

function onClick() {
  color.textContent = getRandomHexColor();
  widget.parentNode.style.backgroundColor = color.textContent;
  
}