// Get computer choice
function getComputerChoice() {
    let random = Math.random();
    let result;
    if (random < 0.3) {
        result = "rock";
    } else if (random < 0.6) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter: rock or paper or scissors");
    return humanChoice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;

    let computerScore = 0;

    // Play a round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else {
            console.log("You won!!!!!!!");
            humanScore++;
        }
    }
    // Invoking the function
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    // Check the winner of all rounds
    if (humanScore === computerScore) {
        console.log("Tie!");
    } else if (humanScore > computerScore) {
        console.log("You Won!!");
    } else {
        console.log("Looser!");
    }
}

// Let's Play
playGame();
