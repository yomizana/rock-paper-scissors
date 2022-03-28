function computerChoice() {
    let randomNumber = Math.floor((Math.random() * 3));

    if (randomNumber = 0) return 'Rock';
    if (randomNumber = 1) return 'Paper';
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
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