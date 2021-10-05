let myAccount = {
    name: "Ahmed Radi",
    expenses: 0,
    income: 0,
}

let addExpenses = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function(account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountDescription = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income  $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 2.5)
addExpenses(myAccount, 160)
console.log(getAccountDescription(myAccount))
resetAccount(myAccount)
console.log(getAccountDescription(myAccount))