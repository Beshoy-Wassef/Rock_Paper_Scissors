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




function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    const buttons = document.querySelectorAll("button")
    const display = document.createElement("div")
    document.body.appendChild(display)

    

    buttons.forEach(function (button) {
    if (button.classList == "rock") {
        
        button.addEventListener("click", function() {
            playRound("Rock")
        })
    } else if (button.classList == "paper") {

        button.addEventListener("click",  function(){
            playRound("Paper")
        })

    } else if (button.classList == "scissors") {
        button.addEventListener("click",  function(){
            playRound("Scissors")
        })}
    })

    function playRound(humanChoice) {
    computerChoice = getComputerChoice()
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice){
            display.textContent = `You tied! ${humanChoice} is the same as ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        display.textContent =`You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        display.textContent = `You Lost! ${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        display.textContent =`You Won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        display.textContent =`You Lost! ${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice === "rock") {
        display.textContent =`You Lost! ${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        display.textContent =`You Won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    if (computerScore + humanScore >= 10 || computerScore == 5 || humanScore == 5){
   if (computerScore === humanScore) {
    console.log(`game is a tie! computer: ${computerScore} vs user: ${humanScore}`);
    
   } else if (computerScore < humanScore) {
    console.log(`game is a win! computer: ${computerScore} vs user: ${humanScore}`);
    
   } else if (computerScore > humanScore) {
    console.log(`game is a loss! computer: ${computerScore} vs user: ${humanScore}`);

   }
    }



    }


}






