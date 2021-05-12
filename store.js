import items from './items.json'
const storeItemTemplate = document.querySelector('#store-item-template')
const storeItemContainer= document.querySelector('[data-store-container]')
import { addToCart } from './shoppingCart.js'

export function setupStore(){

    document.addEventListener('click', e => {
        if(e.target.matches('[data-add-to-cart-button]')){
            const id = e.target.closest('[data-store-item]')
            .dataset.itemId
            addToCart(parseInt(id))

        }
    })

items.forEach(renderStoreItem)

}

function renderStoreItem(item){
const storeItem = storeItemTemplate.content.cloneNode(true)

const container = storeItem.querySelector('[data-store-item]')
container.dataset.itemId = item.id

const name = storeItem.querySelector('[data-name]')
name.innerText = item.name 


const image = storeItem.querySelector('[data-image]')
image.src = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`

const catagory = storeItem.querySelector('[data-catagory]')
catagory.innerText = item.category

const price = storeItem.querySelector('[data-price]')
price.innerText = `$${(item.priceCents / 100).toFixed(2)}`

storeItemContainer.appendChild(storeItem)
}