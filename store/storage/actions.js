export default {
  async getAll(ctx, payload) {
    const data = await this.$axios.get('/mocks/json/catalog.json')
      .then(r => filterCardItems(r.data, payload))
    ctx.commit('SET', { storageName: payload.storageName, data })
  }
}

function filterCardItems(data, payload) {
  return data.filter(item => payload.list.map(item => item.id).includes(item.id))
}
