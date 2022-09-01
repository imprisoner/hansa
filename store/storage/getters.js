export default {
  cartList: state => state.cart,
  cartTotal: state => {
    return state.cart.length ?
      state.cart
        .map(product => product.price * product.count)
        .reduce((acc, val) => acc + val) :
      0
  },
  cartEstimatedTotal: state => {
    return state.cart.length ? state.cart
      .map(product => product.estimatedTotal)
      .reduce((acc, val) => acc + val) :
      0
  }
}