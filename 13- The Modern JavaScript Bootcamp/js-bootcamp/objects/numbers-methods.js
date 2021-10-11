let makeGuess = function (number) {
    min = 1;
    max = 5;
    guess = Math.floor(Math.random() * (max - min + 1)) + min
    return console.log(`the guess is ${guess} user guess ${number} - ${guess == number}`)
}

makeGuess(2)
makeGuess(2)
makeGuess(3)
makeGuess(2)
makeGuess(1)