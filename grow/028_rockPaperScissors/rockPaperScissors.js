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
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return 1;
  } else {
    computerScore++;
    return -1;
  }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

// References: https://stackoverflow.com/questions/52404412/rock-paper-scissors-game-repeating-for-5-rounds
for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("What's your selection? rock, paper or scissors?");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`playerScore: ${playerScore}`);
  console.log(`computerScore: ${computerScore}`);
  if (i === 4) {
    if (playerScore === computerScore) {
      console.log('Draw!');
    } else if (playerScore > computerScore) {
      console.log('You win!');
    } else {
      console.log('You lose!');
    }
  }
}
