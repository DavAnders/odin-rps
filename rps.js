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
  let playerStringNorm =
    playerStringLower.charAt(0).toUpperCase() + playerStringLower.slice(1);
  const winMsg = `You win! ${playerStringNorm} beats ${computerSelection}`;
  const loseMsg = `You lose! ${computerSelection} beats ${playerStringNorm}`;
  const tieMsg = `It's a tie! ${playerStringNorm} matches ${computerSelection}`;

  if (playerStringNorm === "Rock") {
    if (computerSelection === "Rock") {
      return tieMsg;
    } else if (computerSelection === "Paper") {
      return loseMsg;
    } else if (computerSelection === "Scissors") {
      return winMsg;
    } else {
      return "Unexpected Error";
    }
  } else if (playerStringNorm === "Paper") {
    if (computerSelection === "Rock") {
      return winMsg;
    } else if (computerSelection === "Paper") {
      return tieMsg;
    } else if (computerSelection === "Scissors") {
      return loseMsg;
    } else {
      return "Unexpected Error";
    }
  } else if (playerStringNorm === "Scissors") {
    if (computerSelection === "Rock") {
      return loseMsg;
    } else if (computerSelection === "Paper") {
      return winMsg;
    } else if (computerSelection === "Scissors") {
      return tieMsg;
    } else {
      return "Unexpected Error";
    }
  } else {
    return "Unexpected Error: invalid user input";
  }
}

function winCheck(result) {
  if (result.includes("win")) {
    return 1;
  } else {
    return 0;
  }
}

function playGame() {
  let score = 0;
  let rounds = 0;
  // 5 rounds baseline
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    score += winCheck(result);
    rounds += 1;
  }
  if (score === 1) {
    return `Your final score is ${score} win after ${rounds} rounds.`;
  }
  return `Your final score is ${score} wins after ${rounds} rounds.`;
}
