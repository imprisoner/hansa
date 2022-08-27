export default {
  cartList: state => state.cart,
  cartTotal: state => state.cart
  .map(product => product.price * product.count)
  .reduce((acc, val) => acc + val),
  cartEstimatedTotal: state => state.cart
    .map(product => product.estimatedTotal)
    .reduce((acc, val) => acc + val)
}