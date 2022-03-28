let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const playerControls = document.querySelector('.player-controls');
const playerButtons = playerControls.querySelectorAll('button');
const computerControls = document.querySelector('.computer-controls');
const computerButtons = computerControls.querySelectorAll('button');

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectButton(playerButtons, button.dataset.number);
        game(button.textContent);
    });
});

function computerChoice() {
    let randomNumber = Math.floor((Math.random() * 3));

    selectButton(computerButtons, randomNumber);

    if (randomNumber == 0) return 'Rock';
    if (randomNumber == 1) return 'Paper';
    return 'Scissors';
}

function selectButton(buttonCategory, index) {
     buttonCategory.forEach((button) => {
         button.classList.remove('selected');
    });
    buttonCategory[index].classList.add('selected');
}

function playRound(playerSelection, computerSelection) {
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

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
}

function game(playerChoice) {
    let message;
    let computerSelection;
    computerSelection = computerChoice();
    let result = playRound(playerChoice, computerSelection);

    switch (result) {
        case 'win':
            roundCount++;
            playerScore++;
            message = `You won this round! ${playerChoice} beats ${computerSelection}.`;
            break;
        case 'lose':
            roundCount++;
            computerScore++;
            message = `You lost this round! ${playerChoice} loses to ${computerSelection}.`;
            break;
        default:
            roundCount++;
            message = `It's a tie! You both picked ${playerChoice}.`;
    }

    let paraRound = document.querySelector('#round');
    paraRound.textContent = `Round: ${roundCount}`;

    let paraScore = document.querySelector('#score');
    paraScore.textContent = `Scores: ${playerScore} | ${computerScore}`;
    
    let paraMessage = document.querySelector('#message');

    if (roundCount < 5) {
        paraMessage.textContent = message;
    } else {
        if (playerScore > computerScore) {
            message = 'Congratulations, you won the game!';
            paraMessage.textContent = message;
            resetScores()
        } else if (playerScore < computerScore) {
            message = 'Game Over! You lost the game.';
            paraMessage.textContent = message;
            resetScores();
        } else {
            message = 'It\'s a tie!';
            paraMessage.textContent = message;
            resetScores();
        }
    }

}