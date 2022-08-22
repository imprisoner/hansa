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
      <v-col cols="4">
        <v-sheet elevation="2" rounded>
          <v-card-title class="justify-center">Фильтр товаров</v-card-title>
        </v-sheet>
      </v-col>
      <v-col cols="8" v-if="catalog.length">
        <v-row>
          <v-col cols="6" v-for="(product, i) in localCatalog" :key="i">
            <product-card :product="product" class="mx-auto"></product-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn color="orange" large @click="showMore" :disabled="localCatalog.length >40"
              >Показать больше</v-btn
            >
          </v-col>
        </v-row>
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
          disabled: false,
          href: "#",
        },
        {
          text: "Шкафы-купе",
          disabled: true,
          href: "#",
        },
      ],
    };
  },
  methods: {
    showMore() {
      if (this.localCatalog.length > 40) {
        return;
      }
      this.localCatalog = this.localCatalog.concat(this.catalog);
    },
  },
  computed: {
    catalog() {
      return this.$store.state.catalog.list;
    },
  },
  watch: {
    catalog() {
      this.localCatalog = this.localCatalog.concat(this.catalog);
    },
  },
};
</script>

<style scoped>
.catalog-page {
  padding-bottom: 80px;
}
</style>