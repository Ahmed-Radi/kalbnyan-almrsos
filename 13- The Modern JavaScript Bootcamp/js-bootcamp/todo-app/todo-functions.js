// Read exiscting todos from localStorage
const getSaveTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove Todo by ID
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    })
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Setup todo
const toggleTodo = function (id) {
    const todo = todos.find (function (todo) {
        return todo.id === id
    })
    if(todo !== undefined) {
        todo.complete = !todo.complete
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {

    let filterTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filterTodos = filterTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.complete
    })
    // Count unComplete todos
    const countUnComplete = filterTodos.filter(function(todo) {
        return !todo.complete
    })
    // used to remove all Todos to select specify Todos only
    document.querySelector('#todos').innerHTML = ''
    // Count unComplete todos
    document.querySelector('#todos').appendChild(genrateSummaryDOM(countUnComplete))
    //Display Content
    filterTodos.forEach(function (todos) {
        document.querySelector('#todos').appendChild(genrateTodoDOM(todos))
    })

}

// Get the DOM elements from an individual note
const genrateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button')

    // Setup todo Checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.complete
    todoEl.appendChild(checkbox)
    checkbox.addEventListener("change" , function () {
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
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return todoEl;
}
const genrateSummaryDOM = function (countUnComplete) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${countUnComplete.length} todos left`
    return summary;
}