const texts = document.querySelectorAll('.text-d-dark')
const bgwhite = document.querySelectorAll('.bg-white')
const input = document.querySelector('input')
const marine = document.querySelectorAll('.bg-marine')
const violets = document.querySelectorAll('.text-violet')

const modeSwitch = document.querySelector('.light')
modeSwitch.addEventListener('click', event => {
    texts.forEach(text => {
        text.classList.toggle('text-d-dark')
        text.classList.toggle('text-white')
    })
    bgwhite.forEach(bg => {
        bg.classList.toggle('bg-white')
        bg.classList.toggle('bg-dark-blue')
    })
    input.classList.toggle('bg-dark-blue')
    input.classList.toggle('text-white')
    marine.forEach(bg => {
        bg.classList.toggle('bg-marine')
        bg.classList.toggle('bg-dark')
    })
    violets.forEach(violet => {
        violet.classList.toggle('text-violet')
        violet.classList.toggle('text-white')
    })
})