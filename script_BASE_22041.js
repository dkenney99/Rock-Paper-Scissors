const allChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return allChoices[choice];
}

console.log(getComputerChoice())

