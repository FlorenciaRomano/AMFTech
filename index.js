console.log('Hello Flor!')

let cards = document.querySelectorAll('.serviceCard');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('cardActive')
        console.log('hovered')
        console.log(card.children[1].children[1])
        card.children[1].children[1].classList.add('showP')
    })
    card.addEventListener('mouseout', () => {
        card.classList.remove('cardActive')
        card.children[1].children[1].classList.remove('showP')
    })
})