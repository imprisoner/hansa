<template>
  <v-autocomplete
    dense
    v-model="product"
    :loading="loading"
    :items="items"
    item-text="title"
    item-value="title"
    :search-input.sync="search"
    outlined
    flat
    shrink-on-scroll
    label="Поиск"
    hide-details
    solo
    :append-outer-icon="icons.search"
    @input="onInput"
  >
    <template v-slot:item="data">
      <template>
        <nuxt-link :to="`/product/${data.item.id}`">
          <v-list-item dense>
            <v-list-item-avatar tile>
              <v-img contain :src="data.item.image.url" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                v-html="data.item.title"
                class="item__title"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.price"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        search: mdiMagnify,
      },
      product: null,
      loading: false,
      items: [],
      search: null,
      select: null,
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.$store.state.catalog.list.filter((product) => {
          return (
            (product.title || "")
              .toLowerCase()
              .indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
    onInput() {
      console.log("search input");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: initial;
}

.item__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>