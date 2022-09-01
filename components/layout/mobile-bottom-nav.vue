<template>
  <v-bottom-navigation>
    <v-btn icon class="mr-2">
      <v-icon :size="iconSize">{{ icons.phone }}</v-icon>
    </v-btn>
    <v-btn icon to="/favorites">
      <v-icon :size="iconSize">{{ icons.heart }}</v-icon>
    </v-btn>
    <v-btn icon to="/cart">
      <v-icon :size="iconSize">{{ icons.cart }}</v-icon>
      <v-badge
        bordered
        dark
        overlap
        color="orange"
        offset-y="-2"
        offset-x="15"
        :content="cart.length"
        :value="cart.length"
      />
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: ["iconSize", "icons"],
  computed: {
     cart() {
      return this.$store.state.storage.cart;
    },
  }
};
</script>

<style>
</style>