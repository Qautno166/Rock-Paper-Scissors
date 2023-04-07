"use strict";

//Przypisanie atrybutow
const compChoiceDisplay = document.querySelector(".computer-choice");
const userChoiceDisplay = document.querySelector(".user-choice");
const resultDisplay = document.querySelector(".result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result = "";

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    randomChoice();
    userChoiceDisplay.innerHTML = userChoice;

    getResult();
    compChoiceDisplay.innerHTML = compChoice;
  })
);
function randomChoice() {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    compChoice = "rock";
  } else if (randomNumber === 2) {
    compChoice = "paper";
  } else if (randomNumber === 3) {
    compChoice = "scissors";
  }
}
function getResult() {
  const rules = {
    rock: {
      rock: "Draw",
      paper: "Computer Win",
      scissors: "User Win",
    },
    paper: {
      rock: "User Win",
      paper: "Draw",
      scissors: "Computer Win",
    },
    scissors: {
      rock: "Computer Win",
      paper: "User Win",
      scissors: "Draw",
    },
  };
  result = rules[userChoice][compChoice];
  resultDisplay.innerHTML = result;
}
