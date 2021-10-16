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

document.querySelector('#create-note').addEventListener('click',function () {

})

document.querySelector('#remove-all').addEventListener('click',function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input',function (e) {
    console.log(e.target.value)
})
// const ps = document.querySelectorAll('.info')
// ps.forEach(function (p) {
//     p.textContent = '*******'
// })

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'The Ahmed Radi';
// document.querySelector('body').appendChild(newParagraph)