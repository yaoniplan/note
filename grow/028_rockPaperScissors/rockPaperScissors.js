let randomNumber = Math.floor(Math.random() * 3);
const playerSelection = prompt("What's your selection? rock, paper or scissors?");
console.log(playerSelection);
const computerSelection = getComputerChoice();

function getComputerChoice() {
  if (randomNumber === 0) {
    console.log("Rock");
  } else if (randomNumber === 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Evenly matched!");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
  } else if (playerSeleciton === "paper" && computerSelection === "Rock") {
  } else if (playerSeleciton === "paper" && computerSelection === "Paper") {
  } else if (playerSeleciton === "paper" && computerSelection === "Scissors") {
  } else if (playerSeleciton === "scissors" && computerSelection === "Rock") {
  } else if (playerSeleciton === "scissors" && computerSelection === "Paper") {
  } else {
    console.log("Evenly matched");
}
