<template>
  <v-container class="catalog-page">
    <v-row cols="12">
      <v-breadcrumbs :items="breadcrumbs" large>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :disabled="item.disabled" nuxt :to="item.href">
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-sheet elevation="2" rounded>
          <v-card-title class="justify-center">Фильтр товаров</v-card-title>
          <v-divider></v-divider>
          <v-card-actions class="d-block">
            <v-card-subtitle class="text-h6"> Цена </v-card-subtitle>
            <div class="d-flex justify-space-between mb-12">
              <v-text-field
                v-model.number="filters.priceRange.value[0]"
                class="mt-0 pt-0 mr-2"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                outlined
                dense
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                v-model.number="filters.priceRange.value[1]"
                class="mt-0 pt-0 ml-2"
                outlined
                dense
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </div>
            <v-range-slider
              v-model="filters.priceRange.value"
              :max="filters.priceRange.max"
              :min="filters.priceRange.min"
              hide-details
              thumb-label="always"
            >
            </v-range-slider>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-actions class="d-block">
            <v-card-subtitle class="text-h6"> Материал </v-card-subtitle>
            <div>
              <v-checkbox
                v-for="material of materialsSet"
                :key="material"
                :label="material"
                v-model="filters.materials"
                :value="material"
                :on-icon="icons.checkboxShown"
                :off-icon="icons.checkbox"
                hide-details
              />
            </div>
          </v-card-actions>
        </v-sheet>
      </v-col>
      <v-col cols="8" v-if="catalog.length">
        <v-row>
          <v-col cols="6" v-for="(product, i) in renderable" :key="i">
            <product-card :product="product" class="mx-auto"></product-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              color="orange"
              large
              @click="showMore"
              :disabled="localCatalog.length > 40"
              >Показать больше</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from "@mdi/js";
export default {
  async mounted() {
    if (!this.catalog.length) {
      await this.$store.dispatch("catalog/getCatalog");
    }
    this.localCatalog = this.catalog;
  },
  data() {
    return {
      icons: {
        checkbox: mdiCheckboxBlankOutline,
        checkboxShown: mdiCheckboxMarked,
      },
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
      filters: {
        priceRange: {
          min: 0,
          max: 9999,
          value: [0, 1500],
        },
        materials: [],
      },
    };
  },
  methods: {
    showMore() {
      if (this.localCatalog.length > 40) {
        return;
      }
      this.localCatalog = this.localCatalog.concat(this.catalog);
    },
    // filter() {
    //   this.renderable = 
    // },
  },
  computed: {
    catalog() {
      return this.$store.state.catalog.list;
    },
    renderable() {
      return this.localCatalog.filter((product) => {
        const inPriceRange =
          product.price >= this.filters.priceRange.value[0] &&
          product.price <= this.filters.priceRange.value[1];
        const hasMaterials = this.filters.materials.length
          ? product.materials.some((item) =>
              this.filters.materials.includes(item)
            )
          : true;
        return inPriceRange && hasMaterials;
      });
    },
    materialsSet() {
      const arr = this.localCatalog.map((product) => product.materials).flat();
      return new Set(arr);
    },
  },
  watch: {
    catalog() {
      this.localCatalog = this.catalog;
    },
  },
};
</script>

<style scoped>
.catalog-page {
  padding-bottom: 80px;
}
</style>