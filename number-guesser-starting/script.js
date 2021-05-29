let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, targetNumber){
    if(userGuess == targetNumber){
        return true;
    }
    else if(computerGuess == targetNumber){
        return false;
    }
}

function updateScore(winner){
    if(winner)
        humanScore++;
    else
        computerScore++;
}

function advanceRound(){
    currentRoundNumber++;
}

