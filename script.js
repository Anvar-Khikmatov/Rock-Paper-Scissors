
// let humanScore = 0;
// let computerScore = 0;
// let humanChoice;
// let computerChoice;


// function getHumanChoice() {
//     let choice = prompt("choose: Rock, Paper or Scissor");
//     let humanChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//     if (!(humanChoice === 'Rock' || humanChoice === 'Paper' || humanChoice === 'Scissor')){
//         alert("Invalid input! Please enter again")
//         return getHumanChoice();
//     } else {
//         return humanChoice
//     }
// }
    

// function getComputerChoice() {
//     let computerChoice;
//     let randomNumber;

//     randomNumber = Math.random() * 9;
//     alert(randomNumber)
       
//     if (randomNumber < 3) {
//        return computerChoice = "Rock"
       
//     } else if (randomNumber < 6) {
//        return computerChoice = "Paper"
     
//     } else if (randomNumber < 9) {
//        return computerChoice = "Scissor"
//     }
// }



// function playRound() {
//     let rounds = 1;

//     while ( (humanScore || computerScore) < 5 ) {
//         alert("Round: " + rounds)
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//             alert(`Computer chose ${computerChoice}`)
//             alert(`You chose ${humanChoice}`)

//           if (humanChoice === computerChoice) {
//                 alert('It\'s a tie! Play this round again')
//                 continue;
//           }
          
//         if ((humanChoice === "Rock" && computerChoice === "Scissor") ||
//             (humanChoice === "Paper" && computerChoice === "Rock") ||
//             (humanChoice === "Scissor" && computerChoice === "Paper")) {
//                     alert(`You won round ${rounds}`)
//                     humanScore++;
            
//         } else if ((computerChoice === "Rock" && humanChoice === "Scissor") ||
//             (computerChoice === "Paper" && humanChoice === "Rock") ||
//             (computerChoice === "Scissor" && humanChoice === "Paper")) {
//                     alert(`Computer won round ${rounds}`)
//                     computerScore++;
//         }
//           rounds++;
//     }
// }


// playRound();
// alert("Your total score: " + humanScore)
// alert("Computer's total score: " + computerScore)







const buttonsEl = document.querySelectorAll('button');
const humanChoiceEl = document.querySelector('.human-choice')
const computerChoiceEl = document.querySelector('.computer-choice')
const humanScoreEl = document.querySelector('.human-score')
const computerScoreEl = document.querySelector('.computer-score')
let humanScore = 0;
let computerScore = 0;
let tieEl = null;

function setChoices(human, choice) {
    human.textContent = choice;
}


function resetGame() {
    humanScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    humanChoiceEl.textContent = "";
    computerChoiceEl.textContent = "";
}


buttonsEl.forEach((button, index) => {
    
    button.addEventListener('click', () => {

        const choices = ["Rock", "Paper", "Scissor"];
        
        if (index < 3) {
            setChoices(humanChoiceEl, choices[index])
    
        } else if (index == 3) {
            resetGame()
            return;
        }


        
        let randomNumber = Math.floor(Math.random() * 3);
        computerChoiceEl.textContent = choices[randomNumber];



        if (humanChoiceEl.textContent === computerChoiceEl.textContent) {
            
            if (!tieEl) {
                tieEl = document.createElement('p');
                tieEl.textContent = "It is a tie";
                document.body.appendChild(tieEl);
                }
        } else {
            if (tieEl) {
                tieEl.remove();
                tieEl = null; 
                }
        }
            
            
                      
                if ((humanChoiceEl.textContent === "Rock" && computerChoiceEl.textContent === "Scissor") ||
                        (humanChoiceEl.textContent === "Paper" && computerChoiceEl.textContent === "Rock") ||
                        (humanChoiceEl.textContent === "Scissor" && computerChoiceEl.textContent === "Paper")) {
                        humanScore++;
                        humanScoreEl.textContent = humanScore;
                        
                } else if ((computerChoiceEl.textContent === "Rock" && humanChoiceEl.textContent === "Scissor") ||
                        (computerChoiceEl.textContent === "Paper" && humanChoiceEl.textContent === "Rock") ||
                        (computerChoiceEl.textContent === "Scissor" && humanChoiceEl.textContent === "Paper")) {
                        computerScore++;
                        computerScoreEl.textContent = computerScore;
                    }

    })
});



