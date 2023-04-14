'use strict'

const btnCorTomato = document.getElementById('tomato')
const btnCorVerde = document.getElementById('verde')
const btnCorRoxo = document.getElementById('roxo')
const link = document.querySelectorAll('.link')
const projetoName = document.querySelectorAll('.projetoName')
const linkSocial = document.querySelector('.socialLinks')
const logo = document.querySelector('.logo')
const borderTitle = document.querySelector('.border_title')
const homeName = document.querySelector('.home__name')

const addVermelho = () => {

    link.forEach(element => {
        element.classList.remove('hoverRoxo')
        element.classList.remove('hoverGreen')
        element.classList.add('hoverRed')
    })

    projetoName.forEach(element => {
        element.classList.remove('roxo2')
        element.classList.remove('verde2')
        element.classList.add('tomato2')
    })

    linkSocial.classList.remove('borderGreen')
    linkSocial.classList.remove('borderRoxo')
    linkSocial.classList.add('borderRed')

    logo.classList.remove('verde2')
    logo.classList.remove('roxo2')
    logo.classList.add('tomato2')

    homeName.classList.remove('verde2')
    homeName.classList.remove('roxo2')
    homeName.classList.add('tomato2')

    borderTitle.classList.remove('bordenGreen')
    borderTitle.classList.remove('borderRoxo')
    borderTitle.classList.add('borderRed')
}

const addVerde = () => {
    link.forEach(element => {
        element.classList.remove('hoverRed')
        element.classList.remove('hoverRoxo')
        element.classList.add('hoverGreen')
    })

    projetoName.forEach(element => {
        element.classList.remove('roxo2')
        element.classList.remove('tomato2')
        element.classList.add('verde2')
    })

    linkSocial.classList.remove('borderRed')
    linkSocial.classList.remove('borderRoxo')
    linkSocial.classList.add('borderGreen')

    logo.classList.remove('tomato2')
    logo.classList.remove('roxo2')
    logo.classList.add('verde2')

    homeName.classList.remove('tomato2')
    homeName.classList.remove('roxo2')
    homeName.classList.add('verde2')

    borderTitle.classList.remove('borderRed')
    borderTitle.classList.remove('borderRoxo')
    borderTitle.classList.add('borderGreen')
}

const addRoxo = () => {
    link.forEach(element => {
        element.classList.remove('hoverRed')
        element.classList.remove('hoverGreen')
        element.classList.add('hoverRoxo')
    })

    projetoName.forEach(element => {
        element.classList.remove('verde2')
        element.classList.remove('tomato2')
        element.classList.add('roxo2')
    })

    linkSocial.classList.remove('borderRed')
    linkSocial.classList.remove('borderGreen')
    linkSocial.classList.add('borderRoxo')

    logo.classList.remove('verde2')
    logo.classList.remove('tomato2')
    logo.classList.add('roxo2')

    homeName.classList.remove('verde2')
    homeName.classList.remove('tomato2')
    homeName.classList.add('roxo2')

    borderTitle.classList.remove('borderGreen')
    borderTitle.classList.remove('borderRed')
    borderTitle.classList.add('borderRoxo')
}

btnCorTomato.addEventListener('click', addVermelho)
btnCorVerde.addEventListener('click', addVerde)
btnCorRoxo.addEventListener('click', addRoxo)