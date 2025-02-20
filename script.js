
const humanPickClass = document.querySelector('.avatar.human')
const computerPickClass = document.querySelector('.avatar.computer')
const humanPointClass = document.querySelector('.humanPoint')
const computerPointClass = document.querySelector('.computerPoint')
const resultMessageClass = document.querySelector('.resultMessage')
const choiceClass = document.querySelectorAll('.choice')
const humanScoreClass = document.querySelector('.humanScoreCounter')
const computerScoreClass = document.querySelector('.computerScoreCounter')
const tieClass = document.querySelector('.avatar')
const resetBtn = document.querySelector('button')



let human, computer;
let humanScore = 0;
let computerScore = 0;


console.log(humanScore);

const imagePath = {
    humanTie: "img/side aye def.png",
    computerTie: "img/side aye.png",
    rockSmile: "img/rock-smile.webp",
    rockScared: "img/scared rock.png",
    Rock: "img/rock.png",
    Paper: "img/paper.png",
    Scissor: "img/scissor.png"
}




choiceClass.forEach((button, index) => {
    button.addEventListener('click', () => {
        

        humanPickClass.style.display = "block";
        computerPickClass.style.display = "block";
        

        function getResultMessage(hum, cpu){
            resultMessageClass.textContent = `${hum} vs ${cpu}`;
        }

        const choices = ["Rock", "Paper", "Scissor"];
        
        if (index < 3) {
            human = choices[index];            
        }
    
        let randomNumber = Math.floor(Math.random() * 3);
        computer = choices[randomNumber];
        
        if (human === computer) {

            if (human === 'Rock' && computer === 'Rock') {
                humanPickClass.src = imagePath.humanTie 
                computerPickClass.src = imagePath.computerTie
            } else {
                humanPickClass.src = imagePath[human]
                computerPickClass.src = imagePath[computer]
            }
            getResultMessage(human, computer)
            humanPointClass.style.cssText = "color: rgb(186, 42, 13); font-weight: bold;"
            computerPointClass.style.cssText = "color: rgb(186, 42, 13); font-weight: bold;"
            humanPointClass.textContent = "Tie"
            computerPointClass.textContent = "Tie"
                
        
        } else if (
            (human === "Rock" && computer === "Scissor") ||
            (human === "Paper" && computer === "Rock") ||
            (human === "Scissor" && computer === "Paper")) {
                
            if (human === 'Rock' && computer === 'Scissor') {
                humanPickClass.src = imagePath.rockSmile
                computerPickClass.src = imagePath[computer]
            } else if (human === "Paper" && computer === "Rock") {
                humanPickClass.src = imagePath[human]
                computerPickClass.src = imagePath.rockScared;
            } else {
                humanPickClass.src = imagePath[human]
                computerPickClass.src = imagePath[computer]
            }
            getResultMessage(human, computer)
            humanPointClass.style.cssText = "color: rgb(17, 202, 14); font-weight: bold;"
            humanPointClass.textContent = "+1 point"
            computerPointClass.textContent = "";
            humanScore += 1;
            humanScoreClass.textContent = humanScore;
                 
        } else if (
            (computer === "Rock" && human === "Scissor") ||
            (computer === "Paper" && human === "Rock") ||
            (computer === "Scissor" && human === "Paper")) {

            if (computer === 'Rock' && human === 'Scissor') {
                humanPickClass.src = imagePath[human]
                computerPickClass.src = imagePath.rockSmile
            } else if (computer === "Paper" && human === "Rock") {
                humanPickClass.src = imagePath.rockScared
                computerPickClass.src = imagePath[computer];
            } else {
                humanPickClass.src = imagePath[human]
                computerPickClass.src = imagePath[computer]
            }
            getResultMessage(human, computer)
            computerPointClass.style.cssText = "color:rgb(17, 202, 14); font-weight: bold;"
            computerPointClass.textContent = "+1 point"
            humanPointClass.textContent = "";
            computerScore += 1;
            computerScoreClass.textContent = computerScore;
        }



        if (humanScore === 5 || computerScore === 5) {
            document.querySelectorAll('.choice').forEach(choice => {
                choice.style.pointerEvents = "none";  // Disable further clicks
            });
        
            const winner = document.querySelector('.winner');
            winner.style.display = "flex";  
            winner.innerHTML = `
                <p>${humanScore === 5 ? "You won!" : "Computer won!"}</p>
                <button class="play-again">Play Again</button>
            `;
        
            document.querySelector('.overlay').style.display = "block"; // Show overlay
        
            document.querySelector('.play-again').addEventListener('click', () => {
                resetGame();
            });
        }
        

        function resetGame() {
            humanScore = 0;
            computerScore = 0;
            humanScoreClass.textContent = humanScore;
            computerScoreClass.textContent = computerScore;
            humanPickClass.style.display = "none";
            computerPickClass.style.display = "none";
            humanPointClass.textContent = "";
            computerPointClass.textContent = "";
            resultMessageClass.textContent = "";
        
            document.querySelector('.winner').style.display = "none"; // Hide pop-up
            document.querySelector('.overlay').style.display = "none"; // Hide overlay
        
            document.querySelectorAll('.choice').forEach(choice => {
                choice.style.pointerEvents = "auto"; // Enable clicks again
            });
        }
        
    }) 

}) 



resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreClass.textContent = humanScore;
    computerScoreClass.textContent = computerScore;
    humanPickClass.style.display = "none";
    computerPickClass.style.display = "none";
    humanPointClass.textContent = ""
    computerPointClass.textContent = ""
    resultMessageClass.textContent = ""
})