const button = document.querySelector("button");
const body = document.querySelector("body");

const color = [
  "red",
  "blue",
  "green",
  "yellow",
  "aqua",
  "brown",
  "purple",
  "pink",
];

body.style.backgroundColor = "white";
button.addEventListener("click", changeBackground);

function changeBackground() {
  let value = Math.floor(Math.random() * color.length);
  body.style.backgroundColor = color[value];
  console.log(value);
}
