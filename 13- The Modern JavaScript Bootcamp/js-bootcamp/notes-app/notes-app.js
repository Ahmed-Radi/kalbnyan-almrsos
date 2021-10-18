let notes = []
const filters = {
    searchText: ''
}
//Check if existing saved data
const notesJSON = localStorage.getItem('notes')
if(notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '' //used to remove all notes to select specify notes only
    //show specify notes
    filterNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        if(note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unnamed Notes';
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function () {
    notes.push({
        title: '',
        body: ''
    },)
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',function (e) {
    console.log(e.target.value)
})

// document.querySelector('#remove-all').addEventListener('click',function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove();
//     })
// })

document.querySelector('#search-text').addEventListener('input',function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

// const ps = document.querySelectorAll('.info')
// ps.forEach(function (p) {
//     p.textContent = '*******'
// })

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'The Ahmed Radi';
// document.querySelector('body').appendChild(newParagraph)