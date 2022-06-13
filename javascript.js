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
    ++winCount;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    ++winCount;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    ++winCount;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    ++lossCount;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    ++lossCount;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    ++lossCount;
    return "You Lose! Scissors beats Paper";
  }
}

function game() {
  playerSelection = convertInput(prompt("Rock, paper, or scissors?"));
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Game score: ${winCount} - ${lossCount}`);
}

let winCount = 0;
let lossCount = 0;
let playerSelection = "";
const computerSelection = computerPlay();

for (let i = 0; i < 5; i++) {
  game();
}

console.log;
