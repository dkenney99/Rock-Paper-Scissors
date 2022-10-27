const allChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
<<<<<<< HEAD
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
=======
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Paper"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper!"
    } else {
        return "Invalid input. Please input rock, paper, or scissors"
    }
}

let playerSelection = "";

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        computerSelection = computerSelection.toLowerCase()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
>>>>>>> 2da780ecfd08746d077f99103a1e2200bd99ecea
