<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h3">Избранное</h3>
      </v-col>
    </v-row>
    <v-row v-if="favorites.length">
      <v-col cols="4" v-for="(product, i) in favorites" :key="i">
        <product-card :product="product" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h5 class="text-h5">Вы еще ничего не добавили в Избранное</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.storage.favorites;
    },
  },
};
</script>

<style>
</style>