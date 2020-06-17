const buttons = document.querySelectorAll('.btn')
const imgCus = document.querySelector('#customer-img')
const nameCust = document.querySelector('#customer-name')
const textCust = document.querySelector('#customer-text')
let index = 0;
const customers = []

function Customer(img, name, text) {
    this.img = img
    this.name = name
    this.text = text
}

function createCustomer(img, name, text) {
    let imgUrl = `./img/customer-${img}.jpg`
    let customer = new Customer(imgUrl, name, text)

    customers.push(customer)
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
console.log(customers)
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('nextBtn')) {
            index--
            if (index < 0) {
                index = 4
            }
        }
        if (button.classList.contains('prevBtn')) {
            index--
            if (index < 0) {
                index = 4
            }
        }
        imgCus.src = customers[index].img
        nameCust.textContent = customers[index].name
        textCust.textContent = customers[index].text
    })
})