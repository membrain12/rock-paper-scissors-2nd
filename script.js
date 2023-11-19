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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "It's a Tie!";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    } else {
        return `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    }
}