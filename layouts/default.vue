<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon large>
          {{ icons.burger }}
        </v-icon>
      </v-app-bar-nav-icon>
      <p class="text-h4 logo-text ml-4">Ханса-Мебель</p>
      <v-spacer />
      <v-autocomplete
        dense
        :search-input.sync="location"
        :append-outer-icon="icons.search"
        outlined
        flat
        shrink-on-scroll
        cache-items
        label="Поиск"
        hide-details
        solo
      ></v-autocomplete>
      <v-spacer />
      <v-spacer />
      <div>
        <v-btn icon to="/favorites">
          <v-icon x-large>{{ icons.heart }}</v-icon>
        </v-btn>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon to="/cart" v-bind="attrs" v-on="on">
              <v-icon x-large>{{ icons.cart }}</v-icon>
              <v-badge
                bordered
                dark
                overlap
                color="orange"
                offset-y="-7"
                offset-x="15"
                :content="cart.length"
                :value="cart.length"
              />
            </v-btn>
          </template>
          <v-list max-height="400px" style="overflow-y: scroll">
            <v-list-item-group>
              <template v-for="(item, i) in cart">
                <v-list-item :key="item.id" nuxt :to="`/product/${item.id}`" active-class="none" >
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
                <v-divider
                  v-if="item !== cart.lastItem"
                  :key="-(i ^ 2)"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
      <template v-slot:extension>
        <div class="container">
          <div class="row">
            <div class="d-flex align-center justify-center ml-auto">
              <v-icon>
                {{ icons.location }}
              </v-icon>
              <span class="text-heading-6 ml-2">Санкт-Петербург</span>
            </div>
          </div>
        </div>
      </template>
    </v-app-bar>
    <v-main>
      <!-- <v-tabs grow>
        <v-tab>Офисная мебель на заказ</v-tab>
        <v-tab>Кухни на заказ</v-tab>
        <v-tab>Шкафы на заказ</v-tab>
        <v-tab>Комоды на заказ</v-tab>
        <v-tab>Мягкая мебель на заказ</v-tab>
      </v-tabs> -->
      <Nuxt />
    </v-main>
    <ui-footer />
    <v-footer absolute dark>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiAccountGroup,
  mdiTruckDelivery,
  mdiContacts,
  mdiFormatListChecks,
  mdiNewspaperVariantMultipleOutline,
  mdiHeartOutline,
  mdiCartOutline,
  mdiSearchWeb,
  mdiMenu,
  mdiMapMarker,
} from "@mdi/js";


export default {
  name: "DefaultLayout",
  data() {
    return {
      icons: {
        cart: mdiCartOutline,
        heart: mdiHeartOutline,
        search: mdiSearchWeb,
        burger: mdiMenu,
        location: mdiMapMarker,
      },
      items: [
        {
          icon: mdiFormatListChecks,
          title: "Каталог",
          to: "/catalog",
        },
        {
          icon: mdiTruckDelivery,
          title: "Оплата и доставка",
          to: "/about",
        },
        {
          icon: mdiNewspaperVariantMultipleOutline,
          title: "Новости",
          to: "/about",
        },
        {
          icon: mdiAccountGroup,
          title: "О нас",
          to: "/about",
        },
        {
          icon: mdiContacts,
          title: "Контакты",
          to: "/contacts",
        },
      ],
      cities: [
        { name: "Санкт-Петербург" },
        { name: "Москва" },
        { name: "Казань" },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Главная",
      drawer: false,
      location: null,
      search: "",
    };
  },
  async mounted() {
    ["cart", "favorites"].forEach(this.initStorage);
    if (!this.$store.state.catalog.list.length) {
      await this.$store.dispatch("catalog/getCatalog");
    }
    this.$store.dispatch("categories/getCategories");
    this.$store.dispatch("articles/getArticles");
  },
  methods: {
    async initStorage(storageName) {
      const idList = window.localStorage.getItem(storageName);
      if (!idList) {
        return window.localStorage.setItem(storageName, JSON.stringify([]));
      }
      if (idList.length) {
        await this.$store.dispatch("storage/getAll", { storageName, idList });
        return;
      }
    },
  },
  computed: {
    cart() {
      return this.$store.state.storage.cart;
    },
    favorites() {
      return this.$store.state.storage.favorites;
    },
  },
};
</script>

<style>
.v-application p.logo-text {
  margin-bottom: unset;
}
</style>
