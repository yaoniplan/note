const playerSelection = prompt("What's your selection? rock, paper or scissors?");
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// References: https://stackoverflow.com/questions/71856095/am-i-on-the-right-track-rock-paper-scissors-javascript
function playRound(palyerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw! you all play ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
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
