const par = document.querySelectorAll('p');
par.forEach(function(p) {
    if(p.textContent.includes('The') || p.textContent.includes('the')) {
        p.remove();
    }
})