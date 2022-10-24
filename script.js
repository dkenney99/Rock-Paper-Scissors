const allChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Paper"
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats Paper!"
    } else {
        return "Invalid input. Please input rock, paper, or scissors"
    }
}

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let input = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(input, computerSelection));
}