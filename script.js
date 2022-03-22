function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 100));

    if (randomNumber >= 66) return 'Scissors';
    if (randomNumber >= 33) return 'Paper';
    return 'Rock';
}

function playerInputValidation(playerInput) {
    playerInput = playerInput.toLowerCase();

    if (playerInput == 'rock') return 'Rock';
    if (playerInput == 'paper') return 'Paper';
    if (playerInput == 'scissors') return 'Scissors';
    return null;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) return 'Invalid input';

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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('What do you choose? Rock, paper or scissors?', '');
        playerSelection = playerInputValidation(playerSelection);

        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        let winStatement = `You Win! ${playerSelection} beats ${computerSelection}.`;
        let loseStatement = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        let tieStatement = `It's a tie!`;

        if (roundResult == 'win') {
            roundNumber++
            playerScore++;
            console.log(`~ Round: ${roundNumber} ~`);
            console.log(winStatement);
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else if (roundResult == 'lose') {
            roundNumber++
            computerScore++;
            console.log(`~ Round: ${roundNumber} ~`);
            console.log(loseStatement);
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else if (roundResult == 'tie') {
            roundNumber++
            console.log(`~ Round: ${roundNumber} ~`);
            console.log(tieStatement);
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else {
            console.log('Your input was invalid, make sure to enter a valid word.');
            i--;
        }
    }

    console.log('GAME OVER');
    if (playerScore > computerScore) return console.log('Congratulations! You Won!');
    if (playerScore < computerScore) return console.log('You Lost');
    return console.log('It\s a tie.');
}

game();