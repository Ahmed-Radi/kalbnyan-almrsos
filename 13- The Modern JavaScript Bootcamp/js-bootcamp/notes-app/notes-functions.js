// Read exiscting note from localStorage
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

// Remove notes from the list of notes
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//Genrate the DOM structure for the a note
const genrateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const button = document.createElement('button');

    //Setup the remove button
    button.textContent = 'X'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })

    //Setup the note title text
    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed Notes';
    }
    noteEl.appendChild(textEl)

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