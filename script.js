let infoBtns = document.querySelectorAll('.infoBtn');
let homePage = document.querySelector('.home');
let aboutSubmit = document.querySelector('#contact-submit');
let aboutForm = document.querySelector('#about-form');

function infoFunction (event) {
    const text = event.target.nextElementSibling;
    if (window.getComputedStyle(text).display == 'none') {
    text.style.display = 'block';
    event.target.textContent = 'Hide info';
    } else {
        event.target.textContent = 'More info';
        text.style.display = 'none';
    }
}

infoBtns.forEach(btn => {
    btn.addEventListener('click', infoFunction);
}) 


function submitMessage(event) {
    aboutForm.innerHTML = '<p>Thank you for contacing us! We will get back to you as soon as possible!</p><img src="./img/dog.jpg">';
    aboutForm.className = 'about-form-answer';

    
    event.preventDefault();
}

//Add validation to aviod JS error if button does not exist on page
if(aboutSubmit != null)
  aboutSubmit.addEventListener('click', submitMessage);


