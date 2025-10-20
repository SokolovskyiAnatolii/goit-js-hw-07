function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const changeСolor = document.querySelector(".change-color");
const color = document.querySelector(".color");


const handleClick = (event) => {
body.style.backgroundColor =  getRandomHexColor();
color.textContent = getRandomHexColor() || "Anonymous";
};

changeСolor.addEventListener("click", handleClick);