<template>
  <v-list :dense="$vuetify.breakpoint.mobile">
    <v-subheader class="d-flex justify-space-between">
      Навигация
      <v-btn icon right @click="close">
        <v-icon>
          {{ icons.close }}
        </v-icon>
      </v-btn>
    </v-subheader>
    <v-divider></v-divider>
    <v-list-item v-for="(item, i) in items" :key="i" router exact :to="item.to">
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import {
  mdiAccountGroup,
  mdiTruckDelivery,
  mdiContacts,
  mdiFormatListChecks,
  mdiNewspaperVariantMultipleOutline,
  mdiAccount,
  mdiFileCad,
  mdiClose,
} from "@mdi/js";

const items = [
  {
    icon: mdiAccount,
    title: "Аккаунт",
    to: "#",
  },
  {
    icon: mdiFormatListChecks,
    title: "Каталог",
    to: "/catalog",
  },
  {
    icon: mdiFileCad,
    title: "Мебель под заказ",
    to: "#",
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
];

export default {
  data() {
    return {
      icons: {
        close: mdiClose,
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {
    items() {
      return items;
    },
  },
};
</script>

<style>
</style>