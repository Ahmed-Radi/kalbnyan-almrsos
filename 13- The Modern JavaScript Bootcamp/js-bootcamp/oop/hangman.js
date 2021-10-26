const Hangman = function (word= [], remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['a']
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

const game1 = new Hangman('Ahmed', 5)
console.log(game1.getPuzzle())

const game2 = new Hangman('ali', 3)
console.log(game2.getPuzzle())
