export default {
  async getArticles(ctx) {
    const { data } = await this.$axios.get('/mocks/json/articles.json')
    
    ctx.commit('SET', { data })
  }
}