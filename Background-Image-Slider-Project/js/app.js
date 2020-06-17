const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

const buttons = document.querySelectorAll('.btn')
const img = document.querySelector('.img-container')
let counter = 0;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('btn-right')) {
      counter++
      if (counter > 4) {
        counter = 0
      }
    } else if (button.classList.contains('btn-left')) {
      counter--
      if (counter < 0) {
        counter = 4
      }
    }
    img.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
  })
});