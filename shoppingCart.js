const cartButton = document.querySelector('[data-cart-button]')
const cartItemsWrapper = document.querySelector('[data-cart-items-wrapper]')
let shoppingCart = []



export function setupShoppingCart(){}

 cartButton.addEventListener('click', () => {
     cartItemsWrapper.classList.toggle('invisible')
 })

 export function addToCart(){

    shoppingCart.push({id: id, quantity: 1})
}


