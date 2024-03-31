const options = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = options[getRandomInt(3)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let playerStringLower = playerSelection.toLowerCase();
  let playerStringNorm = playerStringLower.charAt(0).toUpperCase() + playerStringLower.slice(1);
  if (playerStringNorm === "Rock") {
    if (computerSelection === "Rock") {
      return `It's a tie! ${playerStringNorm} matches ${computerSelection}`
    }
  }
}
