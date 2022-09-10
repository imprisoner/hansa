<template>
  <section class="ui-footer__nav">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" v-for="(section, i) in sections.top" :key="i">
          <v-expansion-panels
            flat
            :mandatory="!$vuetify.breakpoint.mobile"
            dark
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                :expand-icon="$vuetify.breakpoint.mobile ? icons.expand : ''"
                class="text-h5 text-uppercase font-weight-medium"
              >
                {{ section.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content class="ui-footer__navlist">
                <v-list-item
                  v-for="(link, j) in section.links"
                  :key="j"
                  nuxt
                  :to="link.to"
                  >{{ link.title }}
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mdiChevronUp } from "@mdi/js";
const sections = {
  top: [
    {
      title: "Информация",
      links: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur?",
          href: "",
          icon: null,
        },
        {
          title: "Каталог",
          href: "",
          icon: null,
        },
        {
          title: "О нас",
          href: "",
          icon: null,
        },
        {
          title: "Условия оплаты и доставки",
          href: "",
          icon: null,
        },
        {
          title: "Политика конфиденциальности",
          href: "",
          icon: null,
        },
      ],
    },
    {
      title: "Служба поддержки",
      links: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur?",
          href: "",
          icon: null,
        },
        {
          title: "Каталог",
          href: "",
          icon: null,
        },
        {
          title: "О нас",
          href: "",
          icon: null,
        },
        {
          title: "Условия оплаты и доставки",
          href: "",
          icon: null,
        },
        {
          title: "Политика конфиденциальности",
          href: "",
          icon: null,
        },
      ],
    },
    {
      title: "Дополнительно",
      links: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur?",
          href: "",
          icon: null,
        },
        {
          title: "Каталог",
          href: "",
          icon: null,
        },
        {
          title: "О нас",
          href: "",
          icon: null,
        },
      ],
    },
    {
      title: "Личный кабинет",
      links: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur?",
          href: "",
          icon: null,
        },
        {
          title: "Каталог",
          href: "",
          icon: null,
        },
        {
          title: "О нас",
          href: "",
          icon: null,
        },
        {
          title: "Условия оплаты и доставки",
          href: "",
          icon: null,
        },
        {
          title: "Политика конфиденциальности",
          href: "",
          icon: null,
        },
      ],
    },
  ],
};
export default {
  data() {
    return {
      selected: "",
      icons: {
        expand: mdiChevronUp,
      },
    };
  },
  computed: {
    sections() {
      return sections
    }
  }
};
</script>

<style scoped>
.ui-footer__nav {
  padding: 20px 0;
}
.ui-footer__navlist h5 {
  margin-bottom: 24px;
}
.ui-footer__navlist .v-list-item {
  opacity: 0.8;
}
</style>