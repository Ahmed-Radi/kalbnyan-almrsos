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
// know un complete todos
const countUnComplete = todos.filter(function(todos) {
    return !todos.complete
})
const summary = document.createElement('h2')
summary.textContent = `you have ${countUnComplete.length} todos left`
document.querySelector('body').appendChild(summary)
//Display Content
todos.forEach(function (todos) {
    const p = document.createElement('p')
    p.textContent = todos.text;
    document.querySelector('body').appendChild(p)
})

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