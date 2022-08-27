<template>
  <!-- <v-card class="product-card" max-width="320px"> -->
  <v-sheet elevation="2" class="cart-item" max-width="100%" rounded>
    <section class="d-flex align-center">
      <v-avatar width="100%" height="auto" tile>
        <v-img
          :src="product.image.url"
          :alt="product.image.alt"
          contain
          max-height="200"
        ></v-img>
      </v-avatar>
    </section>

    <v-divider vertical></v-divider>

    <section class="d-flex flex-column justify-space-between py-1">
      <h6 class="text-subtitle-2">{{ product.price }} ₽</h6>
      <nuxt-link
        :to="`/product/${product.id}`"
        class="text-subtitle-2 font-weight-medium cart-item__title"
        active-class="cart-item__link-active"
        exact-active-class="cart-item__link-exact"
      >
        {{ product.title }}
      </nuxt-link>

      <div class="text-nowrap d-flex blue-grey--text">
        <p class="text-caption font-weight-regular mr-4">
          Артикул:
          <span class="blue-grey--text text--lighten-3">{{
            product.vendor_code
          }}</span>
        </p>
        <p class="text-caption font-weight-regular mr-4">
          Материалы:
          <span class="blue-grey--text text--lighten-3">{{ materials }}</span>
        </p>
      </div>
      <div>
        <p class="text-caption font-weight-regular grey--text text--lighten-1">
          В наличии: <span>{{ product.in_stock }}</span>
        </p>
      </div>
    </section>

    <v-divider vertical></v-divider>

    <section class="d-flex flex-column justify-space-between">
      <cart-counter
        :count="product.count ?? 1"
        :max="product.in_stock"
        @counter="onCounterChange"
      />
      <div>
        <v-btn
          block
          text
          x-small
          color="orange"
          @click="onStorageBtnClick('cart')"
          >Удалить</v-btn
        >
        <v-btn
          v-if="!inFavorites"
          block
          text
          x-small
          color="primary"
          @click="onStorageBtnClick('favorites')"
          >В избранное</v-btn
        >
        <div class="plug" v-else></div>
      </div>
    </section>

    <v-divider vertical></v-divider>

    <section
      class="
        d-flex
        flex-column
        justify-space-between
        cart-item__actions
        align-end
      "
    >
      <p class="text-subtitle-1 font-weight-medium">
        {{ product.estimatedTotal }} ₽
      </p>
      <p
        class="
          text-subtitle-2 text-decoration-line-through
          grey--text
          text--lighten-1
        "
        v-if="product.discount"
      >
        {{ total }} ₽
      </p>
      <v-btn outlined dense x-small color="red">-{{ product.discount }}%</v-btn>
    </section>
  </v-sheet>
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
    total() {
      return this.product.count * this.product.price;
    },
    dimensions() {
      return this.product.dimensions.join("x");
    },
    materials() {
      return this.product.materials
        .map((word) => word.toLowerCase())
        .join(", ");
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
  },
  methods: {
    onStorageBtnClick(storageName) {
      const exists = storageName === "cart" ? this.inCart : this.inFavorites;

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
    onCounterChange(e) {
      console.log("counter change");
      this.$store.commit("storage/SET_PRODUCT_COUNT", {
        storageName: "cart",
        product: this.product,
        count: e.count,
      });
      // this.count = e.count
      // console.log('counter change: ', this.count)
    },
  },
  // computed: {
  // }
};
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: minmax(0, 12%) auto minmax(0, 88%) repeat(3, auto) 120px;
  padding: 12px;
  /* gap: 24px; */
}

.cart-item section {
  padding: 0 12px;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  margin-bottom: unset;
}

.text-nowrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cart-item__title {
  position: relative;
}

.cart-item__scales-btn {
  z-index: 10;
  /* position: absolute;
  top: 0;
  right: 0; */
}

.cart-item__title a {
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.plug {
  height: 20px;
}
</style>