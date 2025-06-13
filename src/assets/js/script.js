const open = document.querySelector(".open")
const close = document.querySelector(".close")
const mobile_menu = document.querySelector(".mobile-menu")

open.addEventListener('click', () => {
    mobile_menu.classList.remove("hidden")
})

close.addEventListener('click', () => {
    mobile_menu.classList.add("hidden")
})

var hora = new Date().getHours()
const boxes = document.querySelectorAll('.muda-preto')
const wTexts = document.querySelectorAll('.texto-branco')
const bTexts = document.querySelectorAll('.texto-preto')

if (hora < 12) {
    document.body.style.backgroundImage = "url(./src/assets/images/dia.jpg)"
} else if (hora < 18) {
    document.body.style.backgroundImage = "url(./src/assets/images/tarde.jpg)"
} else {
    document.body.style.backgroundImage = "url(./src/assets/images/noite.jpg)"
}

if (hora >= 12 && hora < 24) {
    boxes.forEach(box => {
        box.style.backgroundColor = "#00000080"
    });

    wTexts.forEach(wText => {
        wText.style.color = "#fff"
    })

    bTexts.forEach(bText => {
        bText.style.color = "#00000080"
    })
}

const icone_search = document.querySelector('.icone-search')
const pesquisa = document.querySelector('#pesquisa')

icone_search.addEventListener('click', () => {
    
})

pesquisa.addEventListener('keydown', () => {
    
})