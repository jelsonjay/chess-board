let board = document.querySelector("#board");
let num = document.querySelector(".numbers");
let letters = document.querySelector(".letters");

let letterList = ["a", "b", "c", "d", "e", "f", "g", "h"];

let index = 0;
let black = false;
let number = 1;

for (let i = 0; i < 8; i++) {
  // for all letters
  let myLetters = document.createElement("li");
  myLetters.textContent = letterList[i];
  myLetters.style = "uppercase";
  letters.appendChild(myLetters);

  // for all numbers
  let allNumbers = document.createElement("li");
  allNumbers.textContent = number++;
  num.appendChild(allNumbers);
}

for (let i = 0; i < 64; i++) {
  const box = document.createElement("div");
  if (black) {
    box.classList.add("box");
    box.classList.add("black");
    index++;
    black = !black;
  } else {
    box.classList.add("box");
    box.classList.add("white");
    index++;
    black = !black;
  }

  board.appendChild(box);
  if (index === 8) {
    black = !black;
    index = 0;
  }
}
