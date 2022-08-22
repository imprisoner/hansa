import { addItem, deleteItem } from "~/composables/storage"

export default {
  SET(state, payload) {
    state[payload.storageName] = payload.data
  },
  ADD(state, payload) {
    addItem(payload.storageName, payload.product.id)
    state[payload.storageName].push(payload.product)
  },
  DELETE(state, payload) {
    deleteItem(payload.storageName, payload.product.id)
    state[payload.storageName] = state[payload.storageName].filter(product => product.id !== payload.product.id)
  }
}