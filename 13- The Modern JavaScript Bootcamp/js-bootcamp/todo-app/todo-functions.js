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
        // if(filters.hideCompleted) {
        //     return !todo.complete
        // } else {
        //     return true
        // }
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

    // document.querySelector('#todos').innerHTML = ''
    // filterTodos.forEach(function (todo) {
    //     const parTodo= document.createElement('p')
    //     parTodo.textContent = todo.text;
    //     document.querySelector('#todos').appendChild(parTodo)
    // })
}

// Get the DOM elements from an individual note
const genrateTodoDOM = function (todos) {
    const p = document.createElement('p')
    p.textContent = todos.text;
    return p;
}
const genrateSummaryDOM = function (countUnComplete) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${countUnComplete.length} todos left`
    return summary;
}