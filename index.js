console.log('Hello Flor!')

let cards = document.querySelectorAll('.serviceCard');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('cardActive')
        console.log('hovered')
        console.log(card.children[1].children[1])
        card.children[1].children[1].classList.add('showP')
        card.children[1].children[2].classList.add('showP')
    })
    card.addEventListener('mouseout', () => {
        card.classList.remove('cardActive')
        card.children[1].children[1].classList.remove('showP')
        card.children[1].children[2].classList.remove('showP')
    })
})

// CAMBIO DE IDIOMA

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle.icon");
const toggleText = document.getElementById("toggle-text");

const flagsElement = document.getElementById("flags")

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    
    for(const textToChange of textsToChange){
       const section = textToChange.dataset.section;
       const value = textToChange.dataset.value;
       
       textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// ALERTAS FORM


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Formulario Enviado', 'success')
  })
}