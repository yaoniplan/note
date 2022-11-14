let randomNumber = Math.floor(Math.random() * 3);
const playerSelection = prompt("What's your selection? rock, paper or scissors?");
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
  if (playerSelection = "rock" && computerSelection = "Paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection = "rock" && computerSelection = "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSeleciton = "paper" && computerSelection = "Rock") {
    return `You win! ${computerSelection} beats ${playerSelection}`
  } else if (playerSeleciton = "paper" && computerSelection = "Scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
}

function game() {
  for (let i = 0; i < 5; i++) {
  }
}
