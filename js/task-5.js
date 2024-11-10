function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click', changeColorBody);

function changeColorBody() {
  const randomColor = getRandomHexColor();
  applyColor(randomColor);
}

function applyColor(color) {
  body.style.backgroundColor = color;
  textColor.textContent = color;
  btn.style.backgroundColor = color;
}
