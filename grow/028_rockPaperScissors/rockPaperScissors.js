let randomNumber = Math.floor(Math.random() * 3);
const playerSelection = prompt("What's your selection? rock, paper or scissors?");
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(palyerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Evenly matched!");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Evenly matched!");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    console.log("Evenly matched!");
  }
}
/*
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
*/
playRound(playerSelection, computerSelection);
console.log(computerScore);
console.log(playerScore);
playRound(playerSelection, computerSelection);
console.log(computerScore);
console.log(playerScore);
