const allChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper!";
  } else {
    return "Invalid input. Please input rock, paper, or scissors";
  }
}

const p = document.createElement("p");
const scoreCard = document.getElementById("score");
p.textContent = `Score: ${userScore} - ${computerScore}`;
scoreCard.appendChild(p);

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
let score = rock.addEventListener("click", () => {
  playRound(allChoices[0], getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound(allChoices[1], getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound(allChoices[2], getComputerChoice());
});
