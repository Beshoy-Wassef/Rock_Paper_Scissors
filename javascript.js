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
    let initialRound = true
    const buttons = document.querySelectorAll("button")
    const display = document.createElement("div")
    const updateMsg = document.querySelector(".update-msg")
    const gameRound = document.querySelector("h2")
    const playerSign = document.querySelector("#player-sign")
    const cmpSign = document.querySelector("#computer-sign")
    const cmpScore = document.querySelector(".compute-score")
    const playerScore = document.querySelector(".play-score")
    document.body.appendChild(display)

    
    

    buttons.forEach(function (button) {
    if (button.id == "rock") {
        
        button.addEventListener("click", function() {
            playRound("Rock")
            playerSign.textContent = "🪨";
            
            })
    } else if (button.id == "paper") {

        button.addEventListener("click",  function(){
            playRound("Paper")
            playerSign.textContent = "📄";
        })

    } else if (button.id == "scissors") {
        button.addEventListener("click",  function(){
            playRound("Scissors")
            playerSign.textContent = "✂️";
            
        })}
    })

    function playRound(humanChoice) {
    computerChoice = getComputerChoice()
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    cmpSign.textContent =  computerChoice == "rock" ? "🪨"  : computerChoice == "paper"  ? "📄" : "✂️"
    //the score increments after
  
    if (humanChoice === computerChoice){
            updateMsg.textContent = `${humanChoice} ties with ${computerChoice}`;
            gameRound.textContent = "Its a tie!"

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        updateMsg.textContent = "Rock beats scissors";
        gameRound.textContent = "You win!"
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        updateMsg.textContent = "Paper beats rock";
        gameRound.textContent = "You lose!"
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        updateMsg.textContent = "Paper beats rock";
        gameRound.textContent = "You win!";
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        updateMsg.textContent = "Scissors beats paper";
        gameRound.textContent = "You lose!";
        ++computerScore;
    } else if (humanChoice == "scissors" && computerChoice === "rock") {
        updateMsg.textContent = "Rock beats scissors";
        gameRound.textContent = "You lose!"
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        updateMsg.textContent = "Scissors beats paper";
        gameRound.textContent = "You win!"
        ++humanScore;
    }
    playerScore.textContent = `Player: ${humanScore}`;
    cmpScore.textContent = `Computer: ${computerScore}`;
    // need a play again pop up
    if (computerScore + humanScore >= 10 || computerScore == 5 || humanScore == 5){
   if (computerScore === humanScore) {
    alert(`game is a tie! computer: ${computerScore} vs user: ${humanScore}`);
    humanScore = 0
    computerScore = 0
   } else if (computerScore < humanScore) {
    alert(`game is a win! computer: ${computerScore} vs user: ${humanScore}`);
     humanScore = 0
    computerScore = 0
   } else if (computerScore > humanScore) {
    alert(`game is a loss! computer: ${computerScore} vs user: ${humanScore}`);
     humanScore = 0
    computerScore = 0
   }
    }



    }


}




playGame()

