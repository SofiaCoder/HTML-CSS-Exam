let info1 = document.getElementById('info1');
let infoBtn1 = document.getElementById('infoBtn1');
let hideBtn = document.getElementById('hideBtn');

function infoFunction (event) {
    info1.style= 'display: block;'
    hideBtn.style= 'display: block;'
}
function hideFunction (event) {
    info1.style = 'display: none;'
    hideBtn.style = 'display: none;'
}

infoBtn1.addEventListener('click', infoFunction);
<<<<<<< Updated upstream

function toggle(elem) {
    var x = elem.nextElementSibling;
    if (x.style.display == "block") {
      x.style.display = "none";
      elem.innerText = "More info";
    } else {
      x.style.display = "block";
      elem.innerText = "Hide info";

    }
  }
=======
hideBtn.addEventListener('click', hideFunction)


// let hideBtn = document.createElement('button')
// hideBtn.textContent = 'Hide info';
// info1.appendChild(hideBtn)
// hideBtn.addEventListener('click', hideFunction)
>>>>>>> Stashed changes
