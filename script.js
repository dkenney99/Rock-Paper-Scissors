const allChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    userScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    userScore++;
  }
}

const scoreCounter = document.createElement("p");
const scoreCard = document.getElementById("score");

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

rock.addEventListener("click", () => {
  playRound(allChoices[0], getComputerChoice());
  console.log(userScore + " " + computerScore);
  if (userScore >= 5) {
    scoreCounter.textContent =
      "Game over! You win! Refresh the page to start again";
  } else if (computerScore >= 5) {
    scoreCounter.textContent =
      "Game over! You lose! Refresh the page to start again";
  } else {
    scoreCounter.textContent = `Score: ${userScore} - ${computerScore}`;
  }
  scoreCard.appendChild(scoreCounter);
});

paper.addEventListener("click", () => {
  playRound(allChoices[1], getComputerChoice());
  console.log(userScore + " " + computerScore);
  if (userScore >= 5) {
    scoreCounter.textContent =
      "Game over! You win! Refresh the page to start again";
  } else if (computerScore >= 5) {
    scoreCounter.textContent =
      "Game over! You lose! Refresh the page to start again";
  } else {
    scoreCounter.textContent = `Score: ${userScore} - ${computerScore}`;
  }
  scoreCard.appendChild(scoreCounter);
});

scissors.addEventListener("click", () => {
  playRound(allChoices[2], getComputerChoice());
  console.log(userScore + " " + computerScore);
  if (userScore >= 5) {
    scoreCounter.textContent =
      "Game over! You win! Refresh the page to start again";
  } else if (computerScore >= 5) {
    scoreCounter.textContent =
      "Game over! You lose! Refresh the page to start again";
  } else {
    scoreCounter.textContent = `Score: ${userScore} - ${computerScore}`;
  }
  scoreCard.appendChild(scoreCounter);
});
