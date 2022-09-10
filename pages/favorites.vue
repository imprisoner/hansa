<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h3">Избранное</h3>
      </v-col>
      <template v-if="favorites.length">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(product, i) in favorites"
          :key="i"
        >
          <product-card :product="product" />
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12">
          <h5 class="text-h5">Вы еще ничего не добавили в Избранное</h5>
        </v-col>
      </template>
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