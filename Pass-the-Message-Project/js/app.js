const form = document.querySelector('#message-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textMsg = document.querySelector('.message-content')
    const inputMsg = document.querySelector('#message')
    const errorMsg = document.querySelector('.feedback')
    if (inputMsg.value !== '') {
        textMsg.textContent = inputMsg.value
        inputMsg.value = ''
    } else {
        errorMsg.classList.add('show')
        setTimeout(() => {
            errorMsg.classList.remove('show')
        }, 1500)
    }
})