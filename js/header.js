'use strict'

const menu = document.querySelector(".menu-burger-container")
const li = document.querySelector(".links-container")

const active = () => {
    menu.classList.toggle('active')
    li.classList.toggle('d-none')
    li.classList.toggle('ativo')
}

menu.addEventListener('click', active)

