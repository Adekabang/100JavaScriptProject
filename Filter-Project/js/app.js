const filterButtons = document.querySelectorAll('.filter-btn')
const items = document.querySelectorAll('.store-item')
const form = document.querySelector('#search-item')

form.addEventListener('input', findByinput)

function filterItem(filterText) {
    items.forEach(item => {
        if (!item.dataset.item.includes(filterText)) {
            item.style.display = 'none'
        } else {
            item.style.display = 'block'
        }
    });
}

function findByinput(e) {
    let textInput = e.target.value
    filterItem(textInput)
}

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        let filter = button.dataset.filter
        if (!(filter === 'all')) {
            filterItem(filter)
        } else {
            filterItem('')
        }
    })
})