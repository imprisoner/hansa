<template>
  <div>
    <v-container fluid class="py-12 white--text bg-1" tag="section">
      <v-row>
        <v-col md="7" cols="12">
          <h2 class="text-sm-h4 text-h5 font-weight-bold mb-4">
            Мебельный <br v-if="isMobile" />
            Интернет-Магазин
          </h2>
          <h3 class="text-sm-h4 text-h6 mb-6">
            Кухни на заказ по индивидуальным проектам
          </h3>
          <p class="text-body-1 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            asperiores molestias dolorum quod nostrum deleniti id nam porro
            cumque amet, neque vel. Doloribus dicta, provident alias atque
            eveniet recusandae quis.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit asperiores molestias dolorum quod nostrum
            deleniti id nam porro cumque amet, neque vel. Doloribus dicta,
            provident alias atque eveniet recusandae quis.
          </p>
          <v-btn color="orange text-white">Подробнее</v-btn>
        </v-col>
        <v-col md="5" cols="12">
          <v-img
            :max-height="mainPicSize"
            src="/images/index/image.webp"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12" sm="6" md="3">
          <v-icon size="64" class="mb-6" color="white">{{
            icons.guarantee
          }}</v-icon>
          <h5 class="text-h6">Гарантия 100% возврата денежных средств</h5>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-icon size="64" class="mb-6" color="white">{{
            icons.delivery
          }}</v-icon>
          <h5 class="text-h6">Доставка по Санкт-Петербургу и Лен-Области</h5>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-icon size="64" class="mb-6" color="white">{{
            icons.order
          }}</v-icon>
          <h5 class="text-h6">Возможность оформление заказа без регистрации</h5>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-icon size="64" class="mb-6" color="white">{{ icons.sale }}</v-icon>
          <h5 class="text-h6">Скидки постоянным покупателям</h5>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-16" tag="section">
      <v-row>
        <v-col cols="12" md="6" v-for="(cat, i) in categories" :key="i">
          <category-card :cat="cat"></category-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid tag="section">
      <v-row class="mb-8">
        <v-col cols="12">
          <div class="d-flex justify-space-between align-baseline">
            <h3 class="text-sm-h4 text-h5 mb-2 mb-sm-0">Хиты продаж</h3>
            <v-btn text small link color="primary" to="#" class="text-button"
              >каталог
              <v-icon :x-small="$vuetify.breakpoint.xsOnly">
                {{ icons.forward }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <client-only>
            <home-products-slider
              v-if="catalog.length"
              :products="catalog"
              :config="fullSlider"
              container-class="hits-slider"
            >
            </home-products-slider>
          </client-only>
        </v-col>
      </v-row>
      <!--  -->
    </v-container>
    <v-container fluid tag="section" class="bg-2 white--text">
      <v-row>
        <v-col md="4" cols="12">
          <h3 class="text-sm-h4 text-h5 mb-8 mb-sm-12">Новинки</h3>
          <p class="text-body-1 grey--text darken-1 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            ratione laudantium rem non vitae cumque? Officiis, unde laudantium
            officia nulla, dolore a totam consequatur vitae labore et sed, quae
            est.
          </p>
          <v-btn text link to="#" color="orange">
            Больше новинок
            <v-icon :x-small="$vuetify.breakpoint.xsOnly">
              {{ icons.forward }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col md="8" cols="12">
          <v-lazy>
            <client-only>
              <home-products-slider
                v-if="catalog.length"
                :products="catalog"
                :config="cuttedSlider"
                container-class="fresh-slider"
              >
              </home-products-slider>
            </client-only>
          </v-lazy>
        </v-col>
      </v-row>
      <!--  -->
    </v-container>
    <v-container fluid tag="section">
      <v-row
        class="justify-space-between align-baseline mb-8 d-block d-sm-flex"
      >
        <v-col cols="12">
          <div class="d-flex justify-space-between align-baseline">
            <h3 class="text-sm-h4 text-h5 mb-2 mb-sm-0">Акции</h3>
            <v-btn text link color="primary" to="#" class="text-button"
              >Все акции
              <v-icon :x-small="$vuetify.breakpoint.xsOnly">
                {{ icons.forward }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <client-only>
            <home-products-slider
              v-if="catalog.length"
              :products="catalog"
              :config="fullSlider"
              container-class="discounts-slider"
            >
            </home-products-slider>
          </client-only>
        </v-col>
      </v-row>
      <!--  -->
    </v-container>
    <v-container fluid tag="section">
      <v-row>
        <v-col cols="12">
          <div class="justify-space-between align-baseline mb-8 d-flex">
            <h3 class="text-sm-h4 text-h5 mb-2 mb-sm-0">Наши статьи</h3>
            <v-btn text link color="primary" to="#" class="text-button"
              >блог
              <v-icon :x-small="$vuetify.breakpoint.xsOnly">
                {{ icons.forward }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <article-card
          v-for="(article, i) in articles"
          :key="i"
          :article="article"
        />
      </v-row>
    </v-container>
    <v-container fluid tag="section">
      <v-lazy>
        <v-row>
          <v-col cols="12" md="6" v-for="(item, i) in unknown" :key="i">
            <v-card class="unknown-card">
              <v-card-title> Lorem, Ipsum </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </v-card-text>
              <v-card-actions>
                <v-btn large link color="orange" to="#" class="ml-auto"
                  >Подробнее</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
    <v-container fluid tag="section">
      <v-row
        class="justify-space-between align-baseline mb-8 d-block d-sm-flex"
      >
        <v-col cols="12">
          <div class="d-flex justify-space-between align-baseline">
            <h3 class="text-sm-h4 text-h5 mb-2 mb-sm-0">Кухни</h3>
            <v-btn text link color="primary" to="#" class="text-button"
              >Все кухни
            </v-btn>
          </div>
        </v-col>
        <v-lazy>
          <v-col cols="12">
            <client-only>
              <home-products-slider
                v-if="catalog.length"
                :products="catalog"
                :config="fullSlider"
                container-class="kitchen-slider"
              >
              </home-products-slider>
            </client-only>
          </v-col>
        </v-lazy>
      </v-row>
      <!--  -->
    </v-container>
  </div>
</template>

<script>
import {
  mdiCheckDecagramOutline,
  mdiTruckDeliveryOutline,
  mdiClipboardCheckOutline,
  mdiSaleOutline,
  mdiChevronRight,
} from "@mdi/js";

const icons = {
  guarantee: mdiCheckDecagramOutline,
  delivery: mdiTruckDeliveryOutline,
  order: mdiClipboardCheckOutline,
  sale: mdiSaleOutline,
  forward: mdiChevronRight,
};

const sliderConfigs = {
  full: {
    spaceBetween: 20,
    slidesPerView: 3,
    direction: "horizontal",
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      960: {
        centeredSlides: true,
        slidesPerView: 3,
      },
    },
  },
  cut: {
    spaceBetween: 20,
    slidesPerView: 2,
    direction: "horizontal",
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        slidesPerView: 1,
      },
      600: {
        centeredSlides: false,
        slidesPerView: 2,
      },
    },
  },
};

const unknown = [
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "#",
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "#",
  },
];

export default {
  head: {
    link: [
      { rel: "preload", as: "image", href: "/images/index/bg.webp" },
      { rel: "preload", as: "image", href: "/images/index/new-bg.webp" },
      { rel: "preload", as: "image", href: "/images/index/image.webp" },
    ],
  },
  async mounted() {
    if (!this.catalog.length) {
      await this.$store.dispatch("catalog/getCatalog");
    }
  },
  data() {
    return {
      icons,
    };
  },
  name: "IndexPage",
  computed: {
    catalog() {
      return this.$store.getters["catalog/all"];
    },
    articles() {
      return this.$store.getters["articles/all"];
    },
    categories() {
      return this.$store.getters["categories/all"];
    },
    kitchens() {
      return this.$store.getters["catalog/kitchens"];
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    fullSlider() {
      return sliderConfigs.full;
    },
    cuttedSlider() {
      return sliderConfigs.cut;
    },
    unknown() {
      return unknown;
    },
    mainPicSize() {
      return this.$vuetify.breakpoint.mdAndUp ? 380 : "auto";
    },
  },
};
</script>

<style scoped>
section:not(:first-child) {
  padding-top: 40px;
  padding-bottom: 40px;
}



section.bg-1 {
  background: url(/images/index/bg.webp) center / cover no-repeat;
}

section.bg-1 h5 {
  max-width: 80%;
  margin: 0 auto;
}

section.bg-2 {
  background: url(/images/index/new-bg.webp) center / cover no-repeat;
}
</style>