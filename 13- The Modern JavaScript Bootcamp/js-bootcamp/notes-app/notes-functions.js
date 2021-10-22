// Read existing notes from localStorage
const getSaveNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'X'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })

    // Setup the note title text
    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed Notes';
    }
    textEl.setAttribute('href',`./edit.html#${note.id}`)
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
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate the last edited message
const generateLastEditedMessage = function (timeStamp) {
    return `last edited ${moment(timeStamp).fromNow()} ago`;
}