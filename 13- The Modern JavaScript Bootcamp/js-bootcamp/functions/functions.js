

let convertFromFahrenheitToCelsius = function (fahrenheit) {
    celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

var celsiusOne = convertFromFahrenheitToCelsius(32)
var celsiusTwo = convertFromFahrenheitToCelsius(64)


console.log('Fahrenheit to Celsius: ' + celsiusOne)
console.log('Fahrenheit to Celsius: ' + celsiusTwo)