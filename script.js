let info1 = document.getElementById('info1');
let infoBtn1 = document.getElementById('infoBtn1');

function infoFunction (event) {
    info1.style= 'display: block;'

    function hideFunction (event) {
        info1.style = 'display: none;'
        hideBtn.remove();
    }
    let hideBtn = document.createElement('button')
    hideBtn.textContent = 'Hide info';
    info1.appendChild(hideBtn)
    hideBtn.addEventListener('click', hideFunction)
    
}

infoBtn1.addEventListener('click', infoFunction);