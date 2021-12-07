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