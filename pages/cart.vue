<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h3">Корзина</h3>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <template v-if="cart.length">
        <cart-items-area :cart="cart"></cart-items-area>
        <v-col cols="10" md="4">
          <v-sheet elevation="4" rounded class="pa-2">
            <v-card-actions class="align-start flex-column">
              <label v-if="$vuetify.breakpoint.mdAndDown" class="mb-1">Введите промокод:</label>
              <div class="d-flex align-start">
                <v-text-field
                  outlined
                  flat
                  dense
                  single-line
                  hide-spin-buttons
                  :hide-details="$vuetify.breakpoint.mdAndDown"
                  hint="Введите промокод"
                  persistent-hint
                  class="promo__input"
                  color="black"
                ></v-text-field>
                <v-btn
                  height="40"
                  dark
                  color="black"
                  depressed
                  class="promo__btn"
                  >{{$vuetify.breakpoint.mdAndDown ? 'OK' : 'Подтвердить'}}</v-btn
                >
              </div>
            </v-card-actions>
            <v-subheader class="d-flex justify-space-between"
              ><span>Доставка:</span> <span>{{ delivery }} ₽</span></v-subheader
            >
            <v-subheader
              class="d-flex justify-space-between red--text text--lighten-1"
              ><span>Скидка:</span> <span>- {{ discount }} ₽</span></v-subheader
            >
            <v-subheader
              class="d-flex justify-space-between orange--text text--lighten-1"
              ><span>Промокод:</span>
              <span>- {{ promoDiscount }} ₽</span></v-subheader
            >
            <v-subheader class="d-flex justify-space-between"
              ><span>Налог:</span> <span>{{ tax }} ₽</span></v-subheader
            >
            <v-divider></v-divider>
            <v-subheader
              class="
                d-flex
                justify-space-between
                text-subtitle-1
                font-weight-medium
                black--text
              "
              ><span>Итого:</span> <span>{{ total }} ₽</span></v-subheader
            >
            <v-card-actions>
              <v-btn block color="success"> К заказу </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-col>
      </template>
      <v-col cols="12" v-else>
        <h5 class="text-h5">В вашей корзине нет продуктов</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      promoDiscount: 0,
      delivery: 0,
      tax: 0,
    };
  },
  computed: {
    cart() {
      return this.$store.getters["storage/cartList"];
    },
    discount() {
      return this.$store.getters["storage/cartTotal"] - this.total;
    },
    total() {
      return this.$store.getters["storage/cartEstimatedTotal"];
    },
  },
  methods: {},
};
</script>

<style scoped>
.promo__btn {
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
}

.promo__input {
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
}
</style>