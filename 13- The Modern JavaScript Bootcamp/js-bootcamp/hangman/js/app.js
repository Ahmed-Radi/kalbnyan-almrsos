const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Ahmed', 5)

// add guess entered
puzzleEl.textContent = game1.puzzle;
// Guesses left
guessEl.textContent = game1.statusMessage;

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);

    // word you want to Guess
    puzzleEl.textContent = game1.puzzle;
    // Guesses left
    guessEl.textContent = game1.statusMessage;

})

// check player status

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText);
        console.log(data)
    }
})

request.open('GET','http://puzzle.mead.io/puzzle')
request.send()