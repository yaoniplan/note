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
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! rock beats scissors`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! paper beats rock`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! scissors beats paper`);
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
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
