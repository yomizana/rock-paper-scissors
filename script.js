function computerPlay() {
    let computerChoice;
    let randomNumber = Math.floor((Math.random() * 100));

    if (randomNumber >= 66) {
        computerChoice = 'Scissors';
    } else if (randomNumber >= 33) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Rock';
    }
}

console.log(computerPlay);