"use strict";
let board = document.querySelector("#board");
let num = document.querySelector(".numbers");
let letters = document.querySelector(".letters");

let letterList = ["a", "b", "c", "d", "e", "f", "g", "h"];

let init = 0;
let blackColor = 0;
let number = 1;

for (let i = 0; i < 8; i++) {
  // for all letters
  let myLetters = document.createElement("li");
  myLetters.textContent = letterList[i];
  myLetters.style.textTransform = "capitalize";
  myLetters.style.color = "#fff";
  letters.appendChild(myLetters);

  // for all numbers
  let allNumbers = document.createElement("li");
  allNumbers.textContent = number++;
  allNumbers.style.color = "#fff";
  num.appendChild(allNumbers);
}

// show all columns
for (let i = 0; i < 64; i++) {
  const box = document.createElement("div");
  if (blackColor) {
    box.classList.add("box");
    box.classList.add("black");
    init++;
    blackColor = !blackColor;
  } else {
    box.classList.add("box");
    box.classList.add("white");
    init++;
    blackColor = !blackColor;
  }

  board.appendChild(box);
  if (init === 8) {
    blackColor = !blackColor;
    init = 0;
  }
}
