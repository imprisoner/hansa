<template>
  <v-app-bar clipped-left app dark>
    <v-app-bar-nav-icon @click="toggleDrawer">
      <v-icon large>
        {{ icons.burger }}
      </v-icon>
    </v-app-bar-nav-icon>

    <v-spacer />
    <template v-if="!isMobile">
      <ui-search />
      <v-spacer />
    </template>
    <template v-else>
      <lazy-layout-header-mobile-search :icon-size="iconSize" :icon="icons.search" />
    </template>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <div class="d-flex align-center justify-center">
        <v-icon color="amber">
          {{ icons.location }}
        </v-icon>
        <span class="text-heading-6 ml-2">Санкт-Петербург</span>
      </div>
      <v-spacer />
    </template>
    <lazy-ui-callback-form :icon-size="iconSize" />
    <div>
      <v-btn icon to="/favorites" class="mr-2">
        <v-icon :size="iconSize">{{ icons.heart }}</v-icon>
      </v-btn>
      <ui-cart :icon-size="iconSize" />
    </div>
    <template v-slot:extension>
      <nuxt-link
        to="/"
        class="
          text-sm-h4 text-h5
          logo-text
          ml-8 ml-md-16
          grey--text
          text--lighten-1
        "
        no-prefetch
      >
        Ханса-Мебель
      </nuxt-link>
    </template>
  </v-app-bar>
</template>

<script>
import {
  mdiHeartOutline,
  mdiMenu,
  mdiMapMarker,
  mdiPhone,
  mdiEmailFastOutline,
  mdiPhoneOutline,
  mdiMagnify,
} from "@mdi/js";
export default {
  props: ["drawer"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        burger: mdiMenu,
        location: mdiMapMarker,
        phone: mdiPhone,
        phoneOutlined: mdiPhoneOutline,
        email: mdiEmailFastOutline,
        search: mdiMagnify,
      },
    };
  },
  computed: {
    favorites() {
      return this.$store.state.storage.favorites;
    },
    iconSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 32;
        case "sm":
          return 32;
        default:
          return 40;
      }
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit("toggle", !this.drawer);
    },
  },
};
</script>

<style>
</style>