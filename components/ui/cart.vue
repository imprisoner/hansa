<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon to="/cart" v-bind="attrs" v-on="on" nuxt no-prefetch>
        <v-icon :size="iconSize">{{ icons.cart }}</v-icon>
        <v-badge
          bordered
          dark
          overlap
          color="orange"
          offset-y="-2"
          offset-x="15"
          :content="cart.length"
          :value="cart.length"
        />
      </v-btn>
    </template>
    <v-list max-height="400px" style="overflow-y: scroll" v-if="cart.length&&!$vuetify.breakpoint.mobile">
      <v-list-item-group>
        <template v-for="(item, i) in cart">
          <v-list-item :key="item.id" inactive>
            <v-list-item-avatar tile height="80" width="80">
              <v-img
                :src="item.image.url"
                :alt="item.image.alt"
                contain
                height="100%"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title tag="p" class="mb-4">{{
                item.title
              }}</v-list-item-title>
              <div>
                <span class="grey--text text-body-2 d-block">
                  {{ item.dimensions.join("x") }}
                </span>
                <span class="grey--text text-body-2 d-block">
                  {{ item.materials.join(", ") }}
                </span>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="item !== cart.lastItem" :key="-(i ^ 2)"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiCartOutline } from "@mdi/js";
export default {
  props: ['iconSize'],
  data() {
    return {
      icons: {
        cart: mdiCartOutline,
      },
    };
  },
  computed: {
    cart() {
      return this.$store.state.storage.cart;
    },
  },
};
</script>

<style>
</style>