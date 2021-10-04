let celsius = {

}
let convertFahrenheit = function(fahrenheit) {
    celsius = (fahrenheit - 32) / 1.8
    kelvin = (fahrenheit + 459.67) * 5/9
    return {
        fahrenheit : fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let temps = convertFahrenheit(74)
console.log(temps)
