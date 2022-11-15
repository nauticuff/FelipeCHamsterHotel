const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const change = document.querySelector('ul');

    menu.addEventListener('click', () => {
        nav.classList.add('open-nav')
    })

    close.addEventListener('click', () => {
        nav.classList.remove('open-nav')
    })

    change.addEventListener('click', () => {
        nav.classList.remove('open-nav')
    })

    
    