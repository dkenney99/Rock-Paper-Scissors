const allChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
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