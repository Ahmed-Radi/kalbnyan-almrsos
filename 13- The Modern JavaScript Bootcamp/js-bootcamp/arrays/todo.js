let todos = [
    {
        text:"walkup",
        complete: false
    },
    {
        text:'pray',
        complete:true
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

//Find uncomplated Todo
const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        // return todo.complete === false;
        return !todo.complete;
    })
}
console.log(getThingsTodo(todos))

// Remove Todo
// const removeNote = function(todo, todoText) {
//     const index = todo.findIndex(function(todos){
//         return todos.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if(index !== -1){
//         todo.splice(index, 1)
//     }
//     return todo
// }
// console.log(removeNote(todos, 'study'))

// const removeNote = function(todos, todoText) {
//     const findToDo = todos.find(function(todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     todos.splice(todos.indexOf(findToDo), 1)
// }
// console.log(todos)





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