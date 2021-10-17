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
    },
]

//input Filter Todo
const filters = {
    searchText: ''
}
//Filter specify Todo
const renderTodos = function (todos, filters) {
    const filterTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const countUnComplete = filterTodos.filter(function(todo) {
        return !todo.complete
    })

    // used to remove all Todos to select specify Todos only
    document.querySelector('#todos').innerHTML = ''

    // Count unComplete todos
    const summary = document.createElement('h2')
    summary.textContent = `you have ${countUnComplete.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    //Display Content
    filterTodos.forEach(function (todos) {
        const p = document.createElement('p')
        p.textContent = todos.text;
        document.querySelector('#todos').appendChild(p)
    })

    // document.querySelector('#todos').innerHTML = ''
    // filterTodos.forEach(function (todo) {
    //     const parTodo= document.createElement('p')
    //     parTodo.textContent = todo.text;
    //     document.querySelector('#todos').appendChild(parTodo)
    // })
}
// filter todos
renderTodos(todos, filters)

//Get input to search for specify Todo
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
})

// Add Todos to the page
document.querySelector('#todo-name').addEventListener('submit', function (e) {
    e.preventDefault();

    //Add todo to array Todos
    todos.push({
        text: e.target.elements.todoText.value,
        complete: false
    },)
    renderTodos(todos, filters)

    //remove value from input after submit
    e.target.elements.todoText.value = '';
})

// //"Add todo" Button
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('add Todo')
// })

// //Add toDo to the page
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

//Complate Add toDo to the page
// document.querySelector('#new-todo-text').addEventListener('change', function (event) {
//     document.querySelector('#add-todo').addEventListener('click', function (e) {
//     const par = document.createElement('p')
//     par.textContent = event.target.value;
//     document.querySelector('body').appendChild(par)
//     // console.log(e.target.value)
//     })
// })

//Old Code
// const addText = document.createElement('p');
// document.querySelector('body').forEach(function(text) {
//     addText.textContent = todos.text;
// })

//Remove all Paragraph have word 'The'
// const par = document.querySelectorAll('p');
// par.forEach(function(p) {
//     if(p.textContent.includes('The') || p.textContent.includes('the')) {
//         p.remove();
//     }
// })