//Read exiscting note from localStorage
const getSaveNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Genrate the DOM structure for the a note
const genrateNoteDOM = function (note) {
    const noteEl = document.createElement('p');
    if(note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Unnamed Notes';
    }
    return noteEl;
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '' //used to remove all notes to select specify notes only
    //show specify notes
    filterNotes.forEach(function (note) {
        const noteEl = genrateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}