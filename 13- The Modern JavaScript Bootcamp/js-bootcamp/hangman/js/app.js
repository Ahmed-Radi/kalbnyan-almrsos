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
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data)
    } else if(e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'EG'
const newRequest = new XMLHttpRequest()
newRequest.addEventListener('readystatechange', (e) => {
    if( e.target.readyState === 4 && e.target.status === 200 ) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.status === 4) {
        console.log('Unable to fetch data')
    }
})

newRequest.open('GET','https://restcountries.com/v2/all')
newRequest.send()