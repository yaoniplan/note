function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// References: https://stackoverflow.com/questions/71856095/am-i-on-the-right-track-rock-paper-scissors-javascript
function playRound(palyerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else {
    return -1;
  }
}

const playerSelection = prompt("What's your selection? rock, paper or scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
let playerScore = 0;
let computerScore = 0;
/*
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
*/
playRound(playerSelection, computerSelection);
