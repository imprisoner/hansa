<template>
  <!-- <v-card class="product-card" max-width="320px"> -->
  <v-sheet
    elevation="2"
    class="cart-item cart-item-md"
    max-width="100%"
    rounded
  >
    <section class="avatar d-flex align-center py-1">
      <v-avatar width="100%" height="100" tile>
        <v-img
          :src="product.image.url"
          :alt="product.image.alt"
          contain
          max-height="100"
        ></v-img>
      </v-avatar>
      <v-divider vertical v-if="$vuetify.breakpoint.lgAndUp"></v-divider>
    </section>

    <section class="content d-flex justify-space-between">
      <div class="d-flex flex-column justify-space-between py-1">
        <h6 class="text-subtitle-2">{{ product.price }} ₽</h6>
        <nuxt-link
          :to="`/product/${product.id}`"
          class="text-subtitle-2 font-weight-medium cart-item__title"
          active-class="cart-item__link-active"
          exact-active-class="cart-item__link-exact"
        >
          {{ product.title }}
        </nuxt-link>

        <div class="text-nowrap d-sm-flex d-block blue-grey--text">
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
          <p
            class="text-caption font-weight-regular grey--text text--lighten-1"
          >
            В наличии: <span>{{ product.in_stock }}</span>
          </p>
        </div>
      </div>
      <v-divider vertical v-if="$vuetify.breakpoint.lgAndUp"></v-divider>
    </section>

    <section class="counter d-flex">
      <div
        class="
          d-flex
          flex-row-reverse
          align-end
          flex-md-column
          align-md-start
          justify-space-between
          py-1
        "
      >
        <cart-counter
          :count="product.count ?? 1"
          :max="product.in_stock"
          @counter="onCounterChange"
        />
        <div>
          <v-btn
            :block="$vuetify.breakpoint.mdAndUp"
            text
            :class="{'mb-md-5': inFavorites}"
            x-small
            color="orange"
            @click="onStorageBtnClick('cart')"
            >Удалить</v-btn
          >
          <v-btn
            v-if="!inFavorites&&!$vuetify.breakpoint.xsOnly"
            :block="$vuetify.breakpoint.mdAndUp"
            text
            x-small
            color="primary"
            @click="onStorageBtnClick('favorites')"
            >В избранное</v-btn
          >
        </div>
      </div>
      <v-divider vertical v-if="$vuetify.breakpoint.lgAndUp"></v-divider>
    </section>

    <section class="price d-flex justify-end">
      <div
        class="
          d-flex
          flex-md-column
          justify-space-between
          cart-item__actions
          align-end
          py-1
          pr-3
        "
      >
        <p
          class="font-weight-medium"
          :class="
            $vuetify.breakpoint.mdAndUp ? 'text-subtitle-1' : 'text-subtitle-2'
          "
        >
          {{ product.estimatedTotal }} ₽
        </p>
        <p
          class="text-subtitle-2 grey--text text--lighten-1"
          :class="product.discount && 'text-decoration-line-through'"
        >
          {{ total }} ₽
        </p>
        <v-btn outlined dense x-small color="red"
          >-{{ product.discount }}%</v-btn
        >
      </div>
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
  destroyed() {
    this.$emit("removed");
  },
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
      return this.product.materials.map((w) => w.toLowerCase()).join(", ");
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
      this.$store.commit("storage/SET_PRODUCT_COUNT", {
        storageName: "cart",
        product: this.product,
        count: e.count,
      });
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: minmax(0, 12%) minmax(0, 88%) auto 100px;
  /* padding: 12px; */

  grid-template-areas: "avatar content counter price";
}

@media (max-width: 959px) {
  .cart-item {
    grid-template-columns: repeat(5, 20%);
    grid-template-areas:
      "avatar content content content content"
      "counter counter counter price price";
  }
}
@media (max-width: 599px) {
  .cart-item {
    grid-template-columns: repeat(5, 20%);
    grid-template-areas:
      "avatar avatar content content content"
      "counter counter counter counter counter"
      "price price price price price";
  }
}

.cart-item > section > *:first-child {
  padding: 0 12px;
}

.avatar {
  grid-area: avatar;
}
.content {
  grid-area: content;
}
.counter {
  grid-area: counter;
}
.price {
  grid-area: price;
}

@media (max-width: 959px) {
  .counter > div {
    width: 100%;
  }
  .price > div {
    width: 100%;
  }
}

.divider {
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

@media (max-width: 599px) {
  .text-nowrap {
    white-space: unset;
  }
}

.cart-item__title {
  position: relative;
}

.cart-item__scales-btn {
  z-index: 10;
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