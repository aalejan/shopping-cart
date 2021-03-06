const cartButton = document.querySelector('[data-cart-button]')
import items from './items.json'
const cartItemsWrapper = document.querySelector('[data-cart-items-wrapper]')
const cartItemTemplate = document.querySelector('#cart-item-template')
const cartItemsContainer = document.querySelector('[data-cart-items-container]')
const cartQuantity = document.querySelector('[data-cart-quantity]')
const cartTotal = document.querySelector('[data-cart-total]')
const cart = document.querySelector('[data-cart]')
let shoppingCart = []


export function setupShoppingCart(){

    document.addEventListener('click', e => {
        if(e.target.matches('[data-remove-from-cart-button]')){
            const id = parseInt(e.target.closest('[data-item]')
            .dataset.itemId)
            removeFromCart(id)
        }
    })

    renderCart()
}

 cartButton.addEventListener('click', () => {
     cartItemsWrapper.classList.toggle('invisible')
 })

 export function addToCart(id){
    const existingItem = shoppingCart.find(entry => entry.id === id )
    if(existingItem){
        existingItem.quantity++
    }else{
        shoppingCart.push({id: id, quantity: 1})
    }

    renderCart()
}

function removeFromCart(id){
    const existingItem = shoppingCart.find(entry => entry.id === id )
    if(existingItem == null) return
    shoppingCart = shoppingCart.filter(entry => entry.id != id)
    renderCart()
}

function renderCart(){
    if(shoppingCart.length === 0){
        cart.classList.add('invisible')
        cartItemsWrapper.classList.add('invisible')
    }else{
        cart.classList.remove('invisible')
        renderCartItems()
    }
}


 function renderCartItems(){
     cartItemsContainer.innerHTML = ''

     cartQuantity.innerText = shoppingCart.length

     const total = shoppingCart.reduce((sum, entry) => {
        const item = items.find(i => entry.id === i.id)
        return sum + ((item.priceCents / 100) * entry.quantity)
     },0)

     cartTotal.innerText = `$${total.toFixed(2)}`

    
shoppingCart.forEach(entry => {

const item = items.find( i => entry.id === i.id)
const cartItem = cartItemTemplate.content.cloneNode(true)

const container = cartItem.querySelector('[data-item]')
container.dataset.itemId = item.id

const name = cartItem.querySelector('[data-name]')
name.innerText = item.name 


const image = cartItem.querySelector('[data-image]')
image.src = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`

if(entry.quantity > 1) {
    const quantity = cartItem.querySelector('[data-quantity]')
    quantity.innerText = `x${entry.quantity}` 
}


const price = cartItem.querySelector('[data-price]')
price.innerText = `$${((item.priceCents / 100) * entry.quantity).toFixed(2)}`

cartItemsContainer.appendChild(cartItem)
})
    
}


