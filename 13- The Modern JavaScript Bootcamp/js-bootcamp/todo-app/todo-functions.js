'use strict'

// Read exiscting todos from localStorage
const getSaveTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove Todo by ID
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Setup todo
const toggleTodo = (id) => {
    const todo = todos.find ((todo) => todo.id === id)
    if(todo) {
        todo.complete = !todo.complete
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {

    let filterTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filterTodos = filterTodos.filter((todo) => !filters.hideCompleted || !todo.complete)
    // Count unComplete todos
    const countUnComplete = filterTodos.filter((todo) => !todo.complete)
    // used to remove all Todos to select specify Todos only
    document.querySelector('#todos').innerHTML = ''
    // Count unComplete todos
    document.querySelector('#todos').appendChild(genrateSummaryDOM(countUnComplete))
    //Display Content
    filterTodos.forEach((todos) => {
        document.querySelector('#todos').appendChild(genrateTodoDOM(todos))
    })

}

// Get the DOM elements from an individual note
const genrateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button')

    // Setup todo Checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.complete
    todoEl.appendChild(checkbox)
    checkbox.addEventListener("change" , () => {
        toggleTodo(todo.id)
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Setup todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText)

    // Setup todo button
    removeButton.textContent = 'X';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return todoEl;
}
const genrateSummaryDOM = (countUnComplete) => {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${countUnComplete.length} todos left`
    return summary;
}