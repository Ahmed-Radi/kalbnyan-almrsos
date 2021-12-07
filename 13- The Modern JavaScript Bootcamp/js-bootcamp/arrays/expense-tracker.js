const account = {
    name: 'Ahmed Radi',
    expenses: [],
    income: [],
    addExpenses : function (description, amount) {
        this.expenses.push({
            description,
            amount
        })
    },
    addIncome : function (description, amount) {
        this.income.push({
            description,
            amount
        })
    },
    getAccountSummary : function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        let totalBalance = 0;
        this.expenses.forEach(function(expens){
            totalExpenses += expens.amount
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        totalBalance = totalIncome - totalExpenses
        return `Account for ${this.name} has $${totalBalance}. $${totalIncome} in income  $${totalExpenses} in expenses.`
    },
}
account.addExpenses("coffee",20)
account.addExpenses("tea",10)
account.addExpenses("cola",15)
account.addIncome("cola",5000)
console.log(account.getAccountSummary())