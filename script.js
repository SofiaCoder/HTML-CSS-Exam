let infoBtns = document.querySelectorAll('.infoBtn');


function infoFunction (event) {
    const text = event.target.nextElementSibling;
    
    if (text.style.display == 'none') {
    text.style.display = 'block';
    event.target.textContent = 'Hide info'
    } else {
        event.target.textContent = 'More info'
        text.style.display = 'none';
    }
}
infoBtns.forEach(btn => {
    btn.addEventListener('click', infoFunction);
}) 

