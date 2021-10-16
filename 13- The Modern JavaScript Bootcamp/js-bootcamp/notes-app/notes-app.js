const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
const filters = {
    searchText: ''
}
const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '' //used to remove all notes to select specify notes
    //show specify notes
    filterNotes.forEach(function (note) {
        const notEl = document.createElement('p');
        notEl.textContent = note.title;
        document.querySelector('#notes').appendChild(notEl)
    })
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function () {

})

document.querySelector('#remove-all').addEventListener('click',function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input',function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
// const ps = document.querySelectorAll('.info')
// ps.forEach(function (p) {
//     p.textContent = '*******'
// })

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'The Ahmed Radi';
// document.querySelector('body').appendChild(newParagraph)