function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 100));

    if (randomNumber >= 66) return 'Scissors';
    if (randomNumber >= 33) return 'Paper';
    return 'Rock';
}

console.log(computerPlay());