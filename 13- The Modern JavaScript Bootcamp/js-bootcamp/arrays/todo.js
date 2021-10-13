let todos = [
    {
        text:"walkup",
        complate: false
    },
    {
        text:'pray',
        complate:true
    },
    {
        text:'play games',
        complete: true
    },
    {
        text:'study',
        complete: false
    },
    {
        text:'study again',
        complete: true
    }
]

// const removeNote = function(todos, todoText) {
//     const findToDo = todos.find(function(todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     todos.splice(todos.indexOf(findToDo), 1)
// }


const removeNote = function(todo, todoText) {
    const index = todo.findIndex(function(todos){
        return todos.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index !== -1){
        todo.splice(index, 1)
    }
    return todo
}
console.log(removeNote(todos, 'study'))
console.log(todos)





// let todo = ["walkup", 'pray', 'play games', 'study', 'study again']
// //delete third item
// todo.splice(2,1)
// //Add new item in the end
// todo.push("new todo")
// // remove first item
// todo.shift();

// console.log(`You have ${todo.length} todos`)
// todo.forEach(function(items, index) {
//     console.log(`${index+1}. ${items}`)
// })