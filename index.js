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