let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let rounds;

function humanChoiceFunction() {
    return humanChoice = prompt("choose Rock Paper Scissor")
}
 



function computerChoiceFunction() {
    for (rounds = 1; rounds <= 5; rounds++) {
        alert("Round: " + rounds)
        randomNumber = Math.random() * 9;
        alert(randomNumber)
        humanChoiceFunction()
        
     

        if (randomNumber < 3) {
            computerChoice = "Rock"
            if (humanChoice === computerChoice) {
                alert('It\'s a tie')
                return computerChoiceFunction()
            } else if (humanChoice === "Paper") {
                alert("You won this round")
                humanScore++;
            
                
            } else if (humanChoice === 'Scissor') {
                alert("You lost this round")
                computerScore++;
           
            }
        }


        else if (randomNumber < 6) {
            computerChoice = "Paper"
            if (humanChoice === computerChoice) {
                alert('It\'s a tie')
                return computerChoiceFunction()
            } else if (humanChoice === "Scissor") {
                alert("You won this round")
                humanScore++;
           
            } else if (humanChoice === 'Rock') {
                alert("You lost this round")
                computerScore++;
            
            }
        }


        
        else if (randomNumber < 9) {
            computerChoice = "Scissor"
            if (humanChoice === computerChoice) {
                alert('It\'s a tie')
                return computerChoiceFunction()
            } else if (humanChoice === "Rock") {
                alert("You won this round")
                humanScore++;
        
            } else if (humanChoice === 'Paper') {
                alert("You lost this round")
                computerScore++;
            
            }
        }
    }
}

computerChoiceFunction();
alert(`Your score: ${humanScore}`);
alert(`Computer score: ${computerScore}`);



