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
const genrateTodoDOM = function (todos) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button')

    // Setup todo Checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox)

    // Setup todo text
    todoText.textContent = todos.text;
    todoEl.appendChild(todoText)

    // Setup todo button
    removeButton.textContent = 'X';
    todoEl.appendChild(removeButton);

    return todoEl;
}
const genrateSummaryDOM = function (countUnComplete) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${countUnComplete.length} todos left`
    return summary;
}