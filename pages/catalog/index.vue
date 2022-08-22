<template>
  <v-container class="catalog-page">
    <v-row cols="12">
      <v-breadcrumbs :items="breadcrumbs" large>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :disabled="item.disabled" nuxt :href="item.href">
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 class="text-h4">Каталог</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      localCatalog: [],
      breadcrumbs: [
        {
          text: "Главная",
          disabled: false,
          href: "/",
        },
        {
          text: "Каталог",
          disabled: true,
          href: "#",
        }
      ],
    };
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
};
</script>

<style scoped>
.catalog-page {
  padding-bottom: 80px;
}
</style>