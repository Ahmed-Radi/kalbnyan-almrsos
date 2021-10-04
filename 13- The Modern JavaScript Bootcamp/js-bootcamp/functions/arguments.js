function getTip(total, tipPrecent = 0.2) {
    return total*tipPrecent;
}

let one = getTip(50)
let two = getTip(20,0.20)
let three = getTip(30,0.50)
let four = getTip(150,0.10)
console.log(one)
console.log(two)
console.log(three)
console.log(four)