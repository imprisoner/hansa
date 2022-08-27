import { addItem, deleteItem, setItemCount } from "~/composables/storage"

export default {
  SET(state, payload) {
    state[payload.storageName] = payload.data.map(product => new CartProduct(product))
  },
  ADD(state, payload) {
    const item = new CartProduct(payload.product)
    addItem(payload.storageName, item.id, item.count)
    state[payload.storageName].push(item)
  },
  DELETE(state, payload) {
    deleteItem(payload.storageName, payload.product)
    state[payload.storageName] = state[payload.storageName].filter(product => product.id !== payload.product.id)
  },
  SET_PRODUCT_COUNT(state, payload) {
    console.log('set product count: ', payload)
    // const product = state[payload.storageName].find(item => item.id == payload.id)
    // payload.product.count = payload.count
    const cartItem = state[payload.storageName].find(item => item.id == payload.product.id)
    cartItem.count = payload.count
    cartItem.estimatedTotal = estimatedTotal(cartItem)
    setItemCount(payload.storageName, cartItem)
  }
}

class CartProduct {
  constructor(product) {
    const each = withDiscount(product)
    return {
      ...product,
      count: 1,
      each,
      estimatedTotal: each
    }
  }


}

function percent(num) {
  return num / 100
}

function withDiscount(product) {
  const exactPrice = product.price - (product.discount * percent(product.price))
  return Math.floor(exactPrice)
}

function estimatedTotal(product) {
  return product.each * product.count
}