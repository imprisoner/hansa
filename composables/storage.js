export const getStorage = (storageName) => {
  return JSON.parse(window.localStorage.getItem(storageName))
}

export const setStorage = async (storageName, payload) => {
  window.localStorage.setItem(storageName, JSON.stringify(payload))
}

export const addItem = async (storageName, id, count) => {
  const data = getStorage(storageName)
  const item = storageName == 'cart' ? {id, count} : {id}
  data.push(item)
  setStorage(storageName, data)
}

export const deleteItem = (storageName, payload) => {
  const data = getStorage(storageName).filter(item => item.id !== payload.id)
  setStorage(storageName, data)
}

export const setItemCount = (storageName, payload) => {
  const data = getStorage(storageName)
  const idx = data.findIndex(item => item.id == payload.id)
  data[idx].count = payload.count
  setStorage(storageName, data)
}

export const inStorage = (storageName, id) => {
  return getStorage(storageName).map(item => item.id).includes(id)
}