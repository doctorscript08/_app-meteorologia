const open = document.querySelector(".open")
const close = document.querySelector(".close")
const mobile_menu = document.querySelector(".mobile-menu")

open.addEventListener('click', () => {
    mobile_menu.classList.remove("hidden")
})

close.addEventListener('click', () => {
    mobile_menu.classList.add("hidden")
})