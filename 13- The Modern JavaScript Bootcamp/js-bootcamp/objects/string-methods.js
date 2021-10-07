let isValidPassword = function(string) {
    return string.length > 8 && string.includes("password")
}
console.log(isValidPassword("ahmedpasswordradi"))
console.log(isValidPassword("12231pdkfdslm"))
console.log(isValidPassword("21passwordradi"))
console.log(isValidPassword("123456"))


