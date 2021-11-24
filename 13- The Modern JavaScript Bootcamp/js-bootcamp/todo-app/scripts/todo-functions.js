'use strict'

// Read existing todos from localStorage
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
    const todoEl = document.querySelector('#todos');
    let filterTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filterTodos = filterTodos.filter((todo) => !filters.hideCompleted || !todo.complete)
    // Count unComplete todos
    const countUnComplete = filterTodos.filter((todo) => !todo.complete)
    // used to remove all Todos to select specify Todos only
    todoEl.innerHTML = ''
    // Count unComplete todos
    todoEl.appendChild(generateSummaryDOM(countUnComplete))
    if (filterTodos.length > 0) {
        //Display Content
        filterTodos.forEach((todos) => {
            todoEl.appendChild(generateTodoDOM(todos))
        })
    } else {
        const messageEl = document.createElement('p');
        messageEl.textContent = 'There are no to-dos to show'
        messageEl.classList.add('empty-message')
        todoEl.appendChild(messageEl)
    }
}

// Get the DOM elements from an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button')

    // Setup todo Checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.complete
    containerEl.appendChild(checkbox)
    checkbox.addEventListener("change" , () => {
        toggleTodo(todo.id)
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Setup todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup todo button
    removeButton.textContent = 'Remove';
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })
    return todoEl;
}
const generateSummaryDOM = (countUnComplete) => {
    const summary = document.createElement('h2')
    const plural = countUnComplete.length === 1 ? '' : 's'
    summary.textContent = `you have ${countUnComplete.length} todo${plural} left`
    summary.classList.add('list-title')
    return summary;
}