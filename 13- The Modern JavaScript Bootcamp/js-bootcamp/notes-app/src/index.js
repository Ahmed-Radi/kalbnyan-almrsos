import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('f4ad31a9-0a52-413d-9192-44ceb2aac5e5')
// updateNote('3508f896-fff2-4a5f-85cc-d9cff41e2f21', {title: 'Ahmed Radi', body: 'go do it'})
// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'Ahmed',
    sortBy: 'byCreated'
})
console.log(getFilters())