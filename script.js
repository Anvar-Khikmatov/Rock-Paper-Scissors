// let computerSelection = computerChoiceFunction();
let humanSelection = humanChoiceFunction();


function humanChoiceFunction() {
    let choice = prompt("choose: Rock Paper Scissor")
    let humanChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    if (!(humanChoice === 'Rock' || humanChoice === 'Paper' || humanChoice === 'Scissor')){
        alert("Invalid input! Please enter again") 
        return humanChoiceFunction();
    } else {
        alert(humanChoice)
        return humanChoice
    }
}
humanChoiceFunction()
    


// function computerChoiceFunction() {
//     let computerChoice;
//     let randomNumber;

//     randomNumber = Math.random() * 9;
       
//     if (randomNumber < 3) {
//        return computerChoice = "Rock"
       
//     } else if (randomNumber < 6) {
//        return computerChoice = "Paper"
     
//     } else if (randomNumber < 9) {
//        return computerChoice = "Scissor"
//     }  
// }


//             if (humanChoice === computerChoice) {
//                 alert('It\'s a tie')
//                 return computerChoiceFunction()
//             } else if (humanChoice === "Paper") {
//                 alert("You won this round")
//                 humanScore++;
            
                
//             } else if (humanChoice === 'Scissor') {
//                 alert("You lost this round")
//                 computerScore++;
           
//             }
//         }
        
//             if (humanChoice === computerChoice) {
//                 alert('It\'s a tie')
//                 return computerChoiceFunction()
//             } else if (humanChoice === "Scissor") {
//                 alert("You won this round")
//                 humanScore++;
           
//             } else if (humanChoice === 'Rock') {
//                 alert("You lost this round")
//                 computerScore++;
            
//             }
        
        
//             if (humanChoice === computerChoice) {
//                 alert('It\'s a tie')
//                 return computerChoiceFunction()
//             } else if (humanChoice === "Rock") {
//                 alert("You won this round")
//                 humanScore++;
        
//             } else if (humanChoice === 'Paper') {
//                 alert("You lost this round")
//                 computerScore++;
            
//             }
        
    


// computerChoiceFunction();
// alert(`Your score: ${humanScore}`);
// alert(`Computer score: ${computerScore}`);



