const button = document.querySelector(".btn");
let body = document.querySelector("body");
let colorName = document.querySelector(".colorName");
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", getColor);

function getColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colors.length);
    hexColor = hexColor + colors[random];
  }
  body.style.backgroundColor = hexColor;
  colorName.innerText = hexColor;
}
