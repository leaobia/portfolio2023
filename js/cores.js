'use strict'

const body = document.querySelector('body')
const btnCorTomato = document.getElementById('tomato')
const btnCorVerde = document.getElementById('verde')
const btnCorRoxo = document.getElementById('roxo')
const link = document.querySelectorAll('.link')
const social = document.querySelectorAll('.social')
const projetoName = document.querySelectorAll('.projetoName')
const linkSocial = document.querySelector('.socialLinks')
const logo = document.querySelector('.logo')
const borderTitle = document.querySelectorAll('.border_title')
const homeName = document.querySelector('.home__name')
const back = document.querySelector('.back')

const addVermelho = () => {

    link.forEach(element => {
        element.classList.remove('hoverRoxo')
        element.classList.remove('hoverGreen')
        element.classList.add('hoverRed')
    })

    social.forEach(element => {
        element.classList.remove('hoverRoxo2')
        element.classList.remove('hoverGreen2')
        element.classList.add('hoverRed2')
    })

    projetoName.forEach(element => {
        element.classList.remove('roxo2')
        element.classList.remove('verde2')
        element.classList.add('tomato2')
    })

    borderTitle.forEach(element => {
        element.classList.remove('bordenGreen')
        element.classList.remove('borderRoxo')
        element.classList.add('borderRed')
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


    body.classList.remove('scrollGreen')
    body.classList.remove('scrollBLue')
    body.classList.add('scrollRed')

    back.classList.remove('backGreen')
    back.classList.remove('backBlue')
    back.classList.add('backRed')
}

const addVerde = () => {
    link.forEach(element => {
        element.classList.remove('hoverRed')
        element.classList.remove('hoverRoxo')
        element.classList.add('hoverGreen')
    })

    social.forEach(element => {
        element.classList.remove('hoverRed2')
        element.classList.remove('hoverRoxo2')
        element.classList.add('hoverGreen2')
    })

    projetoName.forEach(element => {
        element.classList.remove('roxo2')
        element.classList.remove('tomato2')
        element.classList.add('verde2')
    })

    borderTitle.forEach(element => {
        element.classList.remove('borderRed')
        element.classList.remove('borderRoxo')
        element.classList.add('borderGreen')
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

    body.classList.remove('scrollBlue')
    body.classList.remove('scrollRed')
    body.classList.add('scrollGreen')

    back.classList.remove('backBlue')
    back.classList.remove('backRed')
    back.classList.add('backGreen')
}

const addRoxo = () => {
    link.forEach(element => {
        element.classList.remove('hoverRed')
        element.classList.remove('hoverGreen')
        element.classList.add('hoverRoxo')
    })

    social.forEach(element => {
        element.classList.remove('hoverRed2')
        element.classList.remove('hoverGreen2')
        element.classList.add('hoverRoxo2')
    })

    projetoName.forEach(element => {
        element.classList.remove('verde2')
        element.classList.remove('tomato2')
        element.classList.add('roxo2')
    })

    borderTitle.forEach(element => {
        element.classList.remove('borderGreen')
        element.classList.remove('borderRed')
        element.classList.add('borderRoxo')
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

    body.classList.remove('scrollGreen')
    body.classList.remove('scrollRed')
    body.classList.add('scrollBlue')

    back.classList.remove('backGreen')
    back.classList.remove('backRed')
    back.classList.add('backBlue')
}

btnCorTomato.addEventListener('click', addVermelho)
btnCorVerde.addEventListener('click', addVerde)
btnCorRoxo.addEventListener('click', addRoxo)