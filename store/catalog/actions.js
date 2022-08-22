export default {
  async getCatalog(ctx) {
    const { data } = await this.$axios.get('/mocks/json/catalog.json')
    ctx.commit('SET', { data })
  }
}