<template>
  <!-- <v-card class="product-card" max-width="320px"> -->
  <v-card class="product-card" max-width="100%">
    <v-avatar width="100%" height="240" tile>
      <v-img
        :src="product.image.url"
        :alt="product.image.alt"
        contain
        max-height="200"
      ></v-img>
    </v-avatar>
    <v-card-title class="d-flex justify-space-between">
      <nuxt-link
        :to="`/product/${product.id}`"
        active-class="product-card__link-active"
        exact-active-class="product-card__link-exact"
      >
        {{ product.title }}
      </nuxt-link>
      <v-btn icon @click="onScalesClick" style="z-index: 10">
        <v-icon>
          {{ icons.scales }}
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <div class="text-nowrap">
        <p>Габариты: {{ dimensions }}</p>
        <p>Материалы: {{ materials }}</p>
      </div>
      <div class="d-flex justify-space-between align-end">
        <v-rating
          :empty-icon="icons.empty"
          :full-icon="icons.full"
          :half-icon="icons.half"
          :value="product.rating"
          color="orange"
          half-increments
          size="26"
          dense
          readonly
        ></v-rating>
        <div class="grey--text">{{ product.rating }}</div>
        <div class="grey--text">{{ product.feedbacks.length }} отзывов</div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <h6 class="text-h6">от {{ product.price }}</h6>
      <div>
        <v-btn
          @click="onStorageBtnClick('cart')"
          :icon="!inCart"
          :color="inCart ? 'orange' : ''"
          :fab="inCart"
          elevation="0"
          width="40"
          height="40"
        >
          <v-icon :small="inCart">
            {{ inCart ? icons.cartFilled : icons.cart }}
          </v-icon>
        </v-btn>
        <v-btn
          @click="onStorageBtnClick('favorites')"
          :icon="!inFavorites"
          :color="inFavorites ? 'primary' : ''"
          :fab="inFavorites"
          elevation="0"
          width="40"
          height="40"
        >
          <v-icon :small="inFavorites">
            {{ inFavorites ? icons.heartFilled : icons.heart }}
          </v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  mdiStarOutline,
  mdiStar,
  mdiStarHalfFull,
  mdiScaleUnbalanced,
  mdiHeartOutline,
  mdiHeart,
  mdiCartOutline,
  mdiCart,
} from "@mdi/js";

export default {
  props: ["product"],
  data() {
    return {
      icons: {
        empty: mdiStarOutline,
        half: mdiStarHalfFull,
        full: mdiStar,
        scales: mdiScaleUnbalanced,
        heart: mdiHeartOutline,
        heartFilled: mdiHeart,
        cart: mdiCartOutline,
        cartFilled: mdiCart,
      },
    };
  },
  computed: {
    dimensions() {
      return this.product.dimensions.join("x");
    },
    materials() {
      return this.product.materials.join(", ");
    },
    rating() {
      return parseFloat(this.product.rating);
    },
    inCart() {
      return this.$store.state.storage.cart
        .map((item) => item.id)
        .includes(this.product.id);
    },
    inFavorites() {
      return this.$store.state.storage.favorites
        .map((item) => item.id)
        .includes(this.product.id);
    },
    // cart() {
    //   return this.$store.state.cart
    // },
    // favorites() {
    //   return this.$store.state.favorites
    // }
  },
  methods: {
    onStorageBtnClick(storageName) {
      // this.inCart = !this.inCart
      const exists = storageName === 'cart' ? this.inCart : this.inFavorites
      
      if (exists) {
        return this.$store.commit("storage/DELETE", {
          storageName,
          product: this.product,
        });
      }

      this.$store.commit("storage/ADD", { storageName, product: this.product });
    },
    onScalesClick() {
      console.log("scales!");
    },
  },
  // computed: {
  // }
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.text-nowrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
</style>