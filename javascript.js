function computerPlay() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (winCount >= 5) {
    return (container.innerHTML = "Game Over! You win!");
  } else if (lossCount >= 5) {
    return (container.innerHTML = "Game Over! You lose!");
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return (container.innerHTML = `It's a tie! Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return (container.innerHTML = `It's a tie! Score: ${winCount} - ${lossCount}`);
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    return (container.innerHTML = `It's a tie! Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    ++winCount;
    return (container.innerHTML = `You Win! Rock beats Scissors. Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    ++winCount;
    return (container.innerHTML = `You Win! Paper beats Rock. Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    ++winCount;
    return (container.innerHTML = `You Win! Scissors beats Paper. Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    ++lossCount;
    return (container.innerHTML = `You Lose! Paper beats Rock. Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    ++lossCount;
    return (container.innerHTML = `You Lose! Rock beats Scissors. Score: ${winCount} - ${lossCount}`);
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    ++lossCount;
    return (container.innerHTML = `You Lose! Scissors beats Paper. Score: ${winCount} - ${lossCount}`);
  }
}

let winCount = 0;
let lossCount = 0;

const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");

rockButton.addEventListener("click", () => {
  playRound("ROCK", computerPlay());
});

paperButton.addEventListener("click", () => {
  playRound("PAPER", computerPlay());
});

scissorsButton.addEventListener("click", () => {
  playRound("SCISSORS", computerPlay());
});

const container = document.getElementById("container");
const endGame = document.querySelectorAll;
