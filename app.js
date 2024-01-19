const computerChoiceDisplay = document.getElementById('computer-choice') ;
const userChoiceDisplay = document.getElementById('user-choice') ;
const resultDisplay = document.getElementById('result') ;
const possibleChoices = document.querySelectorAll('button') ;

let userChoice ;
let computerChoice ;
let result ;


// e-> event
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice 
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1  //you can aso use possibleChoices.length() in place of 3, we have written 3 because the size of possibleChoices is 3
    // console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'Its a draw !' 
    }

    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win !' 
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You loose !' 
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win !'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You loose !' 
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win !'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You loose !' 
    }
    resultDisplay.innerHTML = result
}