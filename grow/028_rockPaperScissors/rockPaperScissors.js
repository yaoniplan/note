let randomNumber = Math.floor(Math.random() * 3);
const playerSelection = prompt("What's your selection? rock, paper or scissors?");
const computerSelection = getComputerChoice();

function getComputerChoice() {
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound() {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Evenly matched!");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Evenly matched!");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log("Evenly matched!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("What's your selection? rock, paper or scissors?");
    playRound();
  }
}

game();
