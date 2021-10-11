let todo = ["walkup", 'pray', 'play games', 'study', 'study again']

//delete third item
todo.splice(2,1)
//Add new item in the end
todo.push("new todo")
// remove first item
todo.shift();

console.log(`You have ${todo.length} todos`)
todo.forEach(function(items, index) {
    console.log(`${index+1}. ${items}`)
})

for(let counter = 0; counter <= todo.length -1; counter++) {
    console.log(`${counter+1}. ${todo[counter]}`)
}