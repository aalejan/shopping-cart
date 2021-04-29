import items from './items.json'
const storeItemTemplate = document.querySelector('#store-item-template')
const storeItemContainer= document.querySelector('[data-store-container]')

export function setupStore(){
items.forEach(renderStoreItem)

}

function renderStoreItem(item){
const storeItem = storeItemTemplate.content.cloneNode(true)

const container = storeItem.querySelector('[data-store-item]')
container.dataset.itemId = item.id

const name = storeItem.querySelector('[data-name]')
name.innerText = item.name 



const image = storeItem.querySelector('[data-image')
image.src = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`

storeItemContainer.appendChild(storeItem)
}