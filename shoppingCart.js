const cartButton = document.querySelector('[data-cart-button]')
import items from './items.json'
const cartItemsWrapper = document.querySelector('[data-cart-items-wrapper]')
const cartItemTemplate = document.querySelector('#cart-item-template')
const cartItemsContainer = document.querySelector('[data-cart-items-container]')
let shoppingCart = []



export function setupShoppingCart(){}

 cartButton.addEventListener('click', () => {
     cartItemsWrapper.classList.toggle('invisible')
 })

 export function addToCart(id){

    shoppingCart.push({id: id, quantity: 1})
    console.log(shoppingCart)
    renderCart()
}

 function renderCart(){
     
    shoppingCart.forEach(entry => {
        
        const item = items.find( i => entry.id === i.id)
        const cartItem = cartItemTemplate.content.cloneNode(true)

const container = cartItem.querySelector('[data-item]')
container.dataset.itemId = item.id

const name = cartItem.querySelector('[data-name]')
name.innerText = item.name 


const image = cartItem.querySelector('[data-image]')
image.src = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`

const quantity = cartItem.querySelector('[data-quantity]')
quantity.innerText = `x${entry.quantity}` 

const price = cartItem.querySelector('[data-price]')
price.innerText = `$${((item.priceCents / 100) * entry.quantity).toFixed(2)}`

cartItemsContainer.appendChild(cartItem)

    })
}


