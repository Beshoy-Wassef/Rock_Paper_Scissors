console.log("Hello_World")



function getComputerChoice () {
    // Create three options of "Rock" "Paper" and "Scissors"
    // Create an algorithim that randomly picks between the three options
        // Math.random ranodmely generates a number between 0 and 1
        // if we generate 3 times, we can get values of 0, 1, or 2
        // Conditionally assign 0, 1, and 2 to our three options

    const randomNum = Math.floor(Math.random() * 3)
    let computer_choice;
    if (randomNum === 0) {
      return  computer_choice = "Rock"
    } else if (randomNum === 1) {
        return computer_choice = "Paper"
    } else if (randomNum === 2) {
        return computer_choice = "Scissors"
    }
}


function getHumanChoice() {
    // prompt the user for a choice
    // return the choice

    let human_choice = prompt("What is your choice");

    return human_choice;
}


function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log(`You tied! ${humanChoice} is the same as ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You Lost! ${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You Lost! ${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice === "rock") {
        console.log(`You Lost! ${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    }

   for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
   }

   if (computerScore === humanScore) {
    console.log(`game is a tie! computer: ${computerScore} vs user: ${humanScore}`);
   } else if (computerScore < humanScore) {
    console.log(`game is a win! computer: ${computerScore} vs user: ${humanScore}`);
   } else if (computerScore > humanScore) {
    console.log(`game is a loss! computer: ${computerScore} vs user: ${humanScore}`);

   }
    
}