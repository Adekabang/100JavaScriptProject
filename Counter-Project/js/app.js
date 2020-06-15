const buttons = document.querySelectorAll('button')
const numberText = document.querySelector('#counter')
let numCounter = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('prevBtn')) {
      numCounter--
    } else {
      numCounter++
    }
    numberText.textContent = numCounter
    if (numCounter > 0) {
      numberText.style.color = 'green'
    } else if (numCounter < 0) {
      numberText.style.color = 'red'
    } else {
      numberText.style.color = '#333'
    }
  })
});