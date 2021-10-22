let notes = getSaveNotes()
const filters = {
    searchText: '',
    sortBy: 'byEdited',
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function () {
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

document.querySelector('#filter-by').addEventListener('change',function (e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters)
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

window.addEventListener('storage', function (e) {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// const ps = document.querySelectorAll('.info')
// ps.forEach(function (p) {
//     p.textContent = '*******'
// })

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'The Ahmed Radi';
// document.querySelector('body').appendChild(newParagraph)