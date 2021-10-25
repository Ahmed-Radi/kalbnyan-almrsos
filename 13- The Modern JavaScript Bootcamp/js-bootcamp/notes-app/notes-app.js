'use strict'

let notes = getSaveNotes()
const filters = {
    searchText: '',
    sortBy: 'byEdited',
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4();
    const timeStamp = moment().valueOf();

    notes.push({
        id: uuidv4(),
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp,
    },)
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters)
})

// document.querySelector('#remove-all').addEventListener('click', () =>{
//     document.querySelectorAll('.note').forEach( (note) => {
//         note.remove();
//     })
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// document.querySelector('#name-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// const ps = document.querySelectorAll('.info')
// ps.forEach( (p) => {
//     p.textContent = '*******'
// })

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'The Ahmed Radi';
// document.querySelector('body').appendChild(newParagraph)