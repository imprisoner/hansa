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

      <v-spacer />
      <ui-search></ui-search>
      <v-spacer />
      <div class="d-flex align-center justify-center">
        <v-icon color="amber">
          {{ icons.location }}
        </v-icon>
        <span class="text-heading-6 ml-2">Санкт-Петербург</span>
      </div>
      <v-spacer />
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text x-large color="white" dark v-on="on" v-bind="attrs">
            <span> Заказать звонок </span>
          </v-btn>
        </template>

        <v-card>
          <v-btn icon absolute right top @click="dialog = !dialog">
            <v-icon>
              {{ icons.close }}
            </v-icon>
          </v-btn>
          <v-card-title class="text-h5 font-weight-bold justify-center"
            >Оставьте заявку</v-card-title
          >
          <v-card-actions>
            <v-form class="flex-grow-1 pb-4">
              <v-divider class="mb-6"></v-divider>
              <v-text-field v-model="form.name" label="Ваше имя" outlined dense></v-text-field>
              <div class="d-flex justify-content-between flex-column">
                <v-text-field v-model="form.email" label="Почта" outlined dense/>
                <v-text-field v-model="form.phone" label="Телефон" outlined dense/>
              </div>
              <v-textarea
              v-model="form.message"
                label="Ваше сообщение"
                outlined
                no-resize
              />
              <v-divider class="mb-6"></v-divider>
              <v-btn @click="onSubmit" block color="success"
                >Отправить</v-btn
              >
            </v-form>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div>
        <v-btn icon class="mr-2">
          <v-icon x-large>{{ icons.phoneOutlined }}</v-icon>
        </v-btn>
        <v-btn icon to="/favorites" class="mr-2">
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
        <nuxt-link to="/" class="text-h4 logo-text ml-16 grey--text text--lighten-1">
          Ханса-Мебель
        </nuxt-link>
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
  mdiMenu,
  mdiMapMarker,
  mdiPhone,
  mdiEmailFastOutline,
  mdiPhoneOutline,
  mdiClose,
} from "@mdi/js";

export default {
  name: "DefaultLayout",
  data() {
    return {
      dialog: false,
      icons: {
        cart: mdiCartOutline,
        heart: mdiHeartOutline,
        burger: mdiMenu,
        location: mdiMapMarker,
        phone: mdiPhone,
        phoneOutlined: mdiPhoneOutline,
        email: mdiEmailFastOutline,
        close: mdiClose,
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
      form: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
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
        console.log()
        await this.$store.dispatch("storage/getAll", { storageName, list });
        return;
      }
    },
    onSubmit(e) {
      console.log(e)
      e.preventDefault()
      this.$axios.$post('/api/notify/callback', {...this.form}).then(() => {
        this.dialog = false
      })
    }
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
.v-application .logo-text {
  text-decoration: none;
}
</style>
