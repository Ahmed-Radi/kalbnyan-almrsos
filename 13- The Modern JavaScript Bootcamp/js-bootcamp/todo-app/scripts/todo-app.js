'use strict'

const todos = getSaveTodos()

//input Filter Todo
const filters = {
    searchText: '',
    hideCompleted: false,
}

// filter todos
renderTodos(todos, filters)

// Get input to search for specify Todo
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
})

// Add Todos to the page
document.querySelector('#todo-name').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim();
    e.preventDefault();

    if (text.length > 0) {
        //Add todo to array Todos
        todos.push({
            id: uuidv4(),
            text,
            complete: false,
        },)
        saveTodos(todos)
        renderTodos(todos, filters)

        //remove value from input after submit
        e.target.elements.todoText.value = '';
    }
})

// checkbox Hide all complete todo
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

//Filter complete todos
// const filterUncompleteTodo = todos.filter(function (todo) {
//     return !todo.complete
// })
// console.log(filterUncompleteTodo)

// //"Add todo" Button
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('add Todo')
// })

// //Add toDo to the page
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

//Complete Add toDo to the page
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