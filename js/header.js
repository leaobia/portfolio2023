'use strict'

const menu = document.querySelector(".menu-burger-container")
const li = document.querySelector(".links-container")
const links = document.querySelectorAll(".link")

const active = () => {
    menu.classList.toggle('active')
    li.classList.toggle('d-none')
    li.classList.toggle('ativo')
}
const clicadoLink = () => {

    menu.classList.toggle('active')
    li.classList.toggle('d-none')
    li.classList.toggle('ativo')

}

menu.addEventListener('click', active)
links.forEach(link2 => {
    link2.addEventListener('click', clicadoLink)
})

