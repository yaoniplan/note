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

function playRound() {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Evenly matched!");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats scissors");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Evenly matched!");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log("You lose! ${computerSelection} beats ${playerSelection}");
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log("You lose! ${computerSelection} beats ${playerSelection}");
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
    console.log("Evenly matched!");
  }
}

console.log(playRound());
