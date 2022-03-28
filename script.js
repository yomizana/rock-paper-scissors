function computerChoice() {
    let randomNumber = Math.floor((Math.random() * 3));

    if (randomNumber = 0) return 'rock';
    if (randomNumber = 1) return 'paper';
    return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'invalid input') return 'Invalid input';

    console.log(playerSelection, computerSelection);

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') return 'win';
        if (computerSelection == 'Paper') return 'lose';
        return 'tie';
    } 
    
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') return 'win';
        if (computerSelection == 'Scissors') return 'lose';
        return 'tie';
    } 
    
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') return 'win';
        if (computerSelection == 'Rock') return 'lose';
        return 'tie';
    }
}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

let compchoice = 'Rock';

rockButton.addEventListener('click', () => game('Rock'));
paperButton.addEventListener('click', () => game('Paper'));
scissorsButton.addEventListener('click', () => game('Scissors'));