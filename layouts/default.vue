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
        <v-icon>
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
      <v-btn icon to="/favorites">
        <v-icon x-large>{{ icons.heart }}</v-icon>
      </v-btn>
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/cart" v-bind="attrs" v-on="on">
            <v-icon x-large>{{ icons.cart }}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in products" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    <ui-footer>
    </ui-footer>
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
      products: [
        { title: "Продукт 1" },
        { title: "Продукт 2" },
        { title: "Продукт 3" },
        { title: "Продукт 4" },
        { title: "Продукт 5" },
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
};
</script>

<style>
.v-application p.logo-text {
  margin-bottom: unset;
}
</style>
