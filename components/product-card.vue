<template>
  <v-card class="product-card" max-width="320px">
    <v-avatar width="320" height="250" tile>
      <v-img
        :src="product.image.url"
        :alt="product.image.alt"
        contain
        max-height="230"
      ></v-img>
    </v-avatar>
    <v-card-title>
      <nuxt-link to active-class="product-card__link-active" exact-active-class="product-card__link-exact">
        {{ product.title }}
      </nuxt-link>
    </v-card-title>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <p>{{ dimensions }}</p>
        <p>{{ materials }}</p>
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
        <div class="grey--text">
          {{ product.feedbacks.length }} отзывов
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <h6 class="text-h6">от {{ product.price }}</h6>
      <div>
        <v-btn icon>
          <v-icon>
            {{ icons.scales }}
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>
            {{ icons.heart }}
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
  mdiHeart,
  mdiHeartOutline,
} from "@mdi/js";
export default {
  components: {
    mdiStarOutline,
    mdiStar,
    mdiStarHalfFull,
    mdiScaleUnbalanced,
    mdiHeartOutline,
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
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
/* .product-card__link-active {

}

.product-card__link-exact {

} */
/* .product-card {
  width: 300px;
} */
</style>