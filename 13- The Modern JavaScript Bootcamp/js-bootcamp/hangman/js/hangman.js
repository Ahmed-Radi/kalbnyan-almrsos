const Hangman = function (word= [], remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzel = ''

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' ') {
                puzzel += letter;
            } else {
                puzzel += '*'
            }
        })

    return puzzel;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    // Guess unique and bad Guess
    if(isUnique && isBadGuess) {
        this.remainingGuesses--;
    }
}

const game1 = new Hangman('Ahmed', 5)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    console.log(guess)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})