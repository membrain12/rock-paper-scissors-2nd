function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
        return "rock";
    } else if (n == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
    }
    return playerChoice;
}