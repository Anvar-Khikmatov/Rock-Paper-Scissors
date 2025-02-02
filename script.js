
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;


function getHumanChoice() {
    let choice = prompt("choose: Rock, Paper or Scissor");
    let humanChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    if (!(humanChoice === 'Rock' || humanChoice === 'Paper' || humanChoice === 'Scissor')){
        alert("Invalid input! Please enter again")
        return getHumanChoice();
    } else {
        return humanChoice
    }
}
    


function getComputerChoice() {
    let computerChoice;
    let randomNumber;

    randomNumber = Math.random() * 9;
    // alert(randomNumber)
       
    if (randomNumber < 3) {
       return computerChoice = "Rock"
       
    } else if (randomNumber < 6) {
       return computerChoice = "Paper"
     
    } else if (randomNumber < 9) {
       return computerChoice = "Scissor"
    }
}



function playRound() {
    let rounds = 1;

    while ( rounds <= 5 ) { 
        alert("Round: " + rounds)
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
            alert(`Computer chose ${computerChoice}`)
            alert(`You chose ${humanChoice}`)

          if (humanChoice === computerChoice) {
                alert('It\'s a tie! Play this round again')
                continue;             
          }
          
        if ((humanChoice === "Rock" && computerChoice === "Scissor") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissor" && computerChoice === "Paper")) {
                    alert("You won this round")
                    humanScore++;
            
        } else if ((computerChoice === "Rock" && humanChoice === "Scissor") ||
            (computerChoice === "Paper" && humanChoice === "Rock") ||
            (computerChoice === "Scissor" && humanChoice === "Paper")) {
                    alert("Computer won this round")
                    computerScore++;
        }
          rounds++;
    }  
}


playRound();
alert("Your total score: " + humanScore)
alert("Computer's total score: " + computerScore)