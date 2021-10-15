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
const ps = document.querySelectorAll('.info')
ps.forEach(function (p) {
    p.textContent = '*******'
})

const newParagraph = document.createElement('p');
newParagraph.textContent = 'The Ahmed Radi';
document.querySelector('body').appendChild(newParagraph)