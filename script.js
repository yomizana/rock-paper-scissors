const playerSelection = 'Paper';
const computerSelection = computerPlay();

function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 100));

    if (randomNumber >= 66) return 'Scissors';
    if (randomNumber >= 33) return 'Paper';
    return 'Rock';
}

function playRound(playerSelection, computerSelection) {
    let winStatement = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let loseStatement = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    let tieStatement = `It's a tie!`;

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') return winStatement;
        if (computerSelection == 'Paper') return loseStatement;
        return tieStatement;
    } 
    
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') return winStatement;
        if (computerSelection == 'Scissors') return loseStatement;
        return tieStatement;
    } 
    
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') return winStatement;
        if (computerSelection == 'Rock') return loseStatement;
        return tieStatement;
    }
}

console.log(playRound(playerSelection, computerSelection));