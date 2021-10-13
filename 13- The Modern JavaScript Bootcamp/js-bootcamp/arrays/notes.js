const notes = [{
    title:'My next trip',
    body:'My next trip'
},{
    title:'Good days next',
    body:'Eating and outing'
},{
    title:'Office modification',
    body:'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
console.log(findNote(notes, 'trip'))

// const findNote = function(notes, query) {
//     return notes.filter(function (note) {
//         const noteTiltle = note.title.toLowerCase().includes(query.toLowerCase())
//         const noteBody = note.title.toLowerCase().includes(query.toLowerCase())
//         return noteTiltle || noteBody;
//     })
// }
// console.log(findNote(notes, 'trip'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }
// const note = findNote(notes, 'some other office modification')
// console.log(note)