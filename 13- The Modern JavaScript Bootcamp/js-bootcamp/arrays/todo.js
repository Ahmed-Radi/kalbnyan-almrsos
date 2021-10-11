let todo = ["walkup", 'pray', 'play games', 'study', 'study again']

//delete third item
todo.splice(2,1)
//Add new item in the end
todo.push("new todo")
// remove first item
todo.shift();

console.log(`You have ${todo.length} todos`)
console.log(todo)