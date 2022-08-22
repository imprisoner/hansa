export const getStorage = (storageName) => {
  return JSON.parse(window.localStorage.getItem(storageName))
}

export const setStorage = (storageName, payload) => {
  window.localStorage.setItem(storageName, JSON.stringify(payload))
}

export const addItem = (storageName, id) => {
  const data = getStorage(storageName)
  data.push(id)
  setStorage(storageName, data)
}

export const deleteItem = (storageName, id) => {
  const data = getStorage(storageName).filter(item => item !== id)
  setStorage(storageName, data)
}

export const inStorage = (storageName, id) => {
  return getStorage(storageName).includes(id)
}