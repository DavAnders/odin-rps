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

function checkWins(result) {
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
    score += checkWins(result);
    rounds += 1;
  }
  if (score === 1) {
    return `Your final score is ${score} win after ${rounds} rounds.`;
  }
  return `Your final score is ${score} wins after ${rounds} rounds.`;
}

let winCount = 0;
let lossCount = 0;

const results = document.querySelector("#results");
const wins = document.createElement("p");
const losses = document.createElement("p");
const message = document.createElement("p");
const finalWinner = document.createElement("p");

message.textContent = "";
finalWinner.textContent = "";
wins.textContent = "Wins: 0";
losses.textContent = "Losses: 0";

results.appendChild(wins);
results.appendChild(losses);
results.appendChild(message);
results.appendChild(finalWinner);

function playGameButton(e) {
  const playerChoice = e.target.innerText;
  const computerChoice = getComputerChoice();
  let result = playRound(playerChoice, computerChoice);
  if (result.includes("win")) {
    winCount += 1;
    wins.textContent = `Wins: ${winCount}`;
  } else if (result.includes("lose")) {
    lossCount += 1;
    losses.textContent = `Losses: ${lossCount}`;
  }
  message.textContent = result;
  if (winCount === 5) {
    finalWinner.textContent =
      "You reached 5 wins before the opponent! You win the game.";
    lossCount = 0;
    winCount = 0;
    wins.textContent = "Wins: 0";
    losses.textContent = "Losses: 0";
  } else if (lossCount === 5) {
    finalWinner.textContent = "You lost 5 rounds total! You lose the game.";
    lossCount = 0;
    winCount = 0;
    wins.textContent = "Wins: 0";
    losses.textContent = "Losses: 0";
  }
}

const buttonRock = document.getElementById("Rock");
buttonRock.addEventListener("click", playGameButton);
const buttonPaper = document.getElementById("Paper");
buttonPaper.addEventListener("click", playGameButton);
const buttonScissors = document.getElementById("Scissors");
buttonScissors.addEventListener("click", playGameButton);
