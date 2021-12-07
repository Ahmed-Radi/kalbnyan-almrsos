const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})

const render = () => {
    // word you want to Guess
    puzzleEl.innerHTML = ''; //game1.puzzle
    // Guesses left
    guessEl.textContent = game1.statusMessage;
    // game1.puzzleEl.split('') // convert string to array
    game1.puzzle.split('').forEach((letter) => {
        const spanWithWord = document.createElement('span')
        spanWithWord.textContent = letter
        puzzleEl.appendChild(spanWithWord)
    })
}
const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})