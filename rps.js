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
  const winMsg = `You win! ${playerStringNorm} beats ${computerSelection}`
  const loseMsg = `You lose! ${computerSelection} beats ${playerStringNorm}`
  const tieMsg = `It's a tie! ${playerStringNorm} matches ${computerSelection}`

  if (playerStringNorm === "Rock") {
    if (computerSelection === "Rock") {
      return tieMsg
    } else if (computerSelection === "Paper") {
      return loseMsg
    } else if (computerSelection === "Scissors") {
      return winMsg
    } else {
      return "Unexpected Error"
    }
  } else if (playerStringNorm === "Paper") {
    if (computerSelection === "Rock") {
      return winMsg
    } else if (computerSelection === "Paper") {
      return tieMsg
    } else if (computerSelection === "Scissors") {
      return loseMsg
    } else {
      return "Unexpected Error"
    }
  } else if (playerStringNorm === "Scissors") {
    if (computerSelection === "Rock") {
      return loseMsg
    } else if (computerSelection === "Paper") {
      return winMsg
    } else if (computerSelection === "Scissors") {
      return tieMsg
    } else {
      return "Unexpected Error"
    }
  }
}
