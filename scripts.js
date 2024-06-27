const list = document.querySelector('ul')
 let myLi = ''
const buttonMostrar = document.querySelector('.mostrarTudo')
const buttonMAp = document.querySelector('.mapear')
const buttonTudo = document.querySelector('.somarTudo')
const buttonFilter = document.querySelector('.filter')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function mostrar(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {

        myLi += `
            <li>
                  <img src=${product.src}>
                  <p>${product.name}</p>
                  <p class="valor"> ${formatCurrency(product.price)}</p>
            </li>
            `
    })
    list.innerHTML = myLi
}
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dar 10% de desconto

    }))
    mostrar(newPrices)

}
function sum() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
            <li>
                  <p>o valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
            </li>
        `
}
function filter() {
    const vegann = menuOptions.filter((product) => product.vegan)

    mostrar(vegann)
}

buttonMostrar.addEventListener('click', () => mostrar(menuOptions))
buttonMAp.addEventListener('click', mapAllItems)
buttonTudo.addEventListener('click', sum)
buttonFilter.addEventListener('click', filter)