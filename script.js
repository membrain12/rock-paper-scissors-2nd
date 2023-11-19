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

function game() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 1;
    let result;
    

    while (currentRound <= rounds) {
        console.log(`Round ${currentRound}`);
        result = playRound(getPlayerChoice(), getComputerChoice());
        if (result.slice(0, 7) == "You Win") {
            playerScore++;
        } else if (result.slice(0, 8) == "You Lose") {
            computerScore++;
        }
        console.log(result);
        console.log(`The Score is Player: ${playerScore} Computer: ${computerScore}`);
        currentRound++;
    }

    if (playerScore > computerScore) {
        console.log("You Beat the Computer!");
    } else if (computerScore > playerScore) {
        console.log("The Machines Win this Round!");
    } else {
        console.log("It's a Tie this Time");
    }
}