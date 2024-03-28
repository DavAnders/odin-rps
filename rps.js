const options = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice() {
  const choice = options[getRandomInt(3)];
  return choice;
}
