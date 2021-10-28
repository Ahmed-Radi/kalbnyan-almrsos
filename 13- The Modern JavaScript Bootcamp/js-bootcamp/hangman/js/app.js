const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Ahmed', 5)

// add guess entered
puzzleEl.textContent = game1.getPuzzle();
// Guesses left
guessEl.textContent = game1.getStatusMessage();

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode);
    console.log(guess);
    game1.makeGuess(guess);

    // word you want to Guess
    puzzleEl.textContent = game1.getPuzzle();
    // Guesses left
    guessEl.textContent = game1.getStatusMessage();

})

// check player status

