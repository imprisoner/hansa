<template>
  <v-app>
    <v-lazy>
      <v-navigation-drawer
        app
        clipped
        v-model="drawer"
        temporary
        :width="isMobile ? '100vw' : ''"
      >
        <!-- v-if="drawer" -->
        <lazy-ui-drawer-nav @close="drawer = false" />
      </v-navigation-drawer>
    </v-lazy>
    <layout-header @toggle="($event) => (drawer = $event)" />
    <v-main class="layout-content">
      <Nuxt />
    </v-main>
    <lazy-ui-footer />
    <lazy-layout-footer></lazy-layout-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      title: "Главная",
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
      const list = JSON.parse(window.localStorage.getItem(storageName));
      if (!list) {
        return window.localStorage.setItem(storageName, JSON.stringify([]));
      }
      if (list.length) {
        await this.$store.dispatch("storage/getAll", { storageName, list });
        return;
      }
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>

<style>
.v-application .logo-text {
  text-decoration: none;
}

.layout-content {
  min-height: 100vh;
}
</style>
