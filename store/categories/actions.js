export default {
  async getCategories(ctx) {
    const { data } = await this.$axios.get('/mocks/json/categories.json')

    ctx.commit('SET', { data })
  }
}