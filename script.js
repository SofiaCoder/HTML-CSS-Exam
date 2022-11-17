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

//infoBtn1.addEventListener('click', infoFunction);


function toggle(elem) {
    var x = elem.nextElementSibling;
    console.log(x.style.display);
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

$(function() {

    var events = [];
 
    $.getJSON('events.json', function(data) {
        $.each(data.events, function(i, f) {
           var tblRow = "<div id='event-"+f.id + "' class='event-card'>" + 
           "<img alt='" + f.alt + "' class='img' src='" + f.image + "' />" + 
           "<h2 class='name'>" + f.name + "</h2>" +
           "<span class='desc'>" + f.desc + "</span>" +
           "<span class='vategory'>" + f.category + "</span>" +
           "<button onclick='toggle(this);'>More info</button>" +
           "<span class='info'>" + f.info + "</span>" +
           "</div>";
           $(tblRow).appendTo(".event");
      });
 
    });
 
 });
