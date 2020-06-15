const button = document.querySelector('#btn')
const body = document.querySelector('body')
const hex = document.querySelector('#hex-value')

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
button.addEventListener('click', changeHexBackground)

function changeHexBackground() {
    let hexRandom = '#'
    for (var i = 0; i < 6; i++) {
        hexValueRandom = Math.floor(Math.random() * hexValues.length)
        hexRandom += hexValues[hexValueRandom]
    }
    hex.textContent = hexRandom
    body.style.backgroundColor = hexRandom
}
