const items = document.querySelectorAll('#store-items')
const modal = document.querySelector('.lightbox-container')
const modalImage = document.querySelector('.lightbox-item')
const modalClose = document.querySelector('.lightbox-close')
const modalControl = document.querySelectorAll('.lightbox-control')
const storeImages = document.querySelectorAll('.store-img')

const images = []
let imgIndex = 0

storeImages.forEach(imageItem => {
  imgUrl = imageItem.src
  images.push(imgUrl)
})

items.forEach(item => {
  item.addEventListener('click', (e) => {
    modal.classList.add('show')
    imgIndex = images.indexOf(e.target.src)
    modalImage.style.backgroundImage = `url(${images[imgIndex]})`
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('show')
})

modalControl.forEach(control => {
  control.addEventListener('click', () => {
    if (control.classList.contains('btnRight')) {
      imgIndex < images.length - 1 ? imgIndex++ : imgIndex = 0
    }
    if (control.classList.contains('btnLeft')) {
      imgIndex > 0 ? imgIndex-- : imgIndex = images.length - 1
    }
    modalImage.style.backgroundImage = `url(${images[imgIndex]})`
  })

})