let notes = getSaveNotes()
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function () {
    const id = uuidv4();

    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    },)
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
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

window.addEventListener('storage', function (e) {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const dayOne = new Date('march 10 2005 12:00:01')
const dayTwo = new Date()
const dayOneTimeStamp = dayOne.getTime()
const dayTwoTimeStamp = dayTwo.getTime()

dayOneTimeStamp < dayTwoTimeStamp ? console.log(dayTwo.toString()) : console.log(dayOne.toString())

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