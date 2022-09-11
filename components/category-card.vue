<template>
  <v-card>
    <div
      class="d-flex flex-column flex-sm-row flex-no-wrap justify-space-between"
    >
      <div>
        <nuxt-link :to="`/catalog/${cat.id}`" no-prefetch>
          <v-card-title> {{ cat.title }} </v-card-title>
        </nuxt-link>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="(link, j) in cat.links" :key="j">
            {{ link.label }}
          </v-list-item>
        </v-list>
      </div>
      <div>
        <v-avatar tile :size="250" class="pa-4">
          <v-img :src="cat.image.url" max-height="234" contain />
        </v-avatar>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["cat"],
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>