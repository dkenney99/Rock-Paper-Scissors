const allChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return allChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Paper"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats Paper!"
    }
}