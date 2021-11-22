const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
let game1;

// // add guess entered
// puzzleEl.textContent = game1.puzzle;
// // Guesses left
// guessEl.textContent = game1.statusMessage;

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

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch ((err) => {
//     console.log(`Error: ${err}`)
// })

// check player status

// const countryCode = 'EG'
// getCountry(countryCode).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// const countryCode = 'EG'
// const newRequest = new XMLHttpRequest()
// newRequest.addEventListener('readystatechange', (e) => {
//     if( e.target.readyState === 4 && e.target.status === 200 ) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.status === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// newRequest.open('GET','https://restcountries.com/v2/all')
// newRequest.send()