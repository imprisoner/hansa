<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h3">Корзина</h3>
      </v-col>
    </v-row>
    <v-row v-if="cart.length">
      <v-col cols="4" v-for="(product, i) in cart" :key="i">
        <product-card :product="product" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h5 class="text-h5">В вашей корзине нет продуктов</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.storage.cart;
    },
  },
};
</script>

<style>
</style>