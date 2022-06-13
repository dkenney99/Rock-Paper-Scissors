function convertInput(playerInput) {
  return playerInput.toUpperCase();
}

function computerPlay() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "It is a tie!";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "It is a tie!";
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    return "It is a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "You Lose! Scissors beats Paper";
  }
}

function game() {
  playerSelection = convertInput(prompt("Rock, paper, or scissors?"));
  console.log(playRound(playerSelection, computerSelection));
}

let playerSelection = "";
const computerSelection = computerPlay();

for (let i = 0; i < 5; i++) {
  game();
}
