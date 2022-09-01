<template>
  <v-container fluid class="product-page">
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" large>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :disabled="item.disabled"
              nuxt
              :href="item.href"
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row class="product-views mb-8" v-if="product">
      <v-col cols="6" tag="section">
        <div class="product-slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" v-for="i in 5" :key="i">
              <v-img
                max-height="100%"
                contain
                :src="product.image.url"
                :alt="product.image.alt"
              />
            </div>
          </div>
            <!--  -->
        </div>
        <div class="product-slider__thumbs swiper" thumbsSlider>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i in 5" :key="i+5">
              <v-img
                max-height="100%"
                contain
                :src="product.image.url"
                :alt="product.image.alt"
              />
            </div>
            <!--  -->
          </div>
        </div>
      </v-col>
      <v-col cols="6" tag="section">
        <v-sheet rounded elevation="2">
          <div class="d-flex justify-space-between align-center">
            <v-card-title class="text-h5 font-weight-bold">{{
              product.title
            }}</v-card-title>
            <v-card-actions>
              <v-btn icon @click="onScalesClick" style="z-index: 1">
                <v-icon>
                  {{ icons.scales }}
                </v-icon>
              </v-btn>
              <v-btn
                @click="onStorageBtnClick('favorites')"
                :icon="!inFavorites"
                :color="inFavorites ? 'primary' : ''"
                :fab="inFavorites"
                elevation="0"
                width="40"
                height="40"
              >
                <v-icon :small="inFavorites">
                  {{ inFavorites ? icons.heartFilled : icons.heart }}
                </v-icon>
              </v-btn>
            </v-card-actions>
          </div>
          <v-card-actions class="d-flex align-end">
            <v-rating
              :empty-icon="icons.empty"
              :full-icon="icons.full"
              :half-icon="icons.half"
              :value="product.rating"
              color="orange"
              half-increments
              large
              dense
              readonly
            ></v-rating>
            <h5 class="text--grey ml-8 text-h5">{{ product.rating }}</h5>
          </v-card-actions>
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="3"><p class="grey--text">Артикул:</p></v-col>
              <v-col cols="9"
                ><p>{{ product.vendor_code }}</p></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="3"><p class="grey--text">Материал:</p></v-col>
              <v-col cols="9"
                ><p>{{ product.materials.join(', ') }}</p></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="3"><p class="grey--text">Размер:</p></v-col>
              <v-col cols="9"
                ><p>{{ product.dimensions.join('x') }}</p></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="3"><p class="grey--text">Цвет:</p></v-col>
              <v-col cols="9"
                ><p>{{ product.color.join(', ') }}</p></v-col
              >
            </v-row>
          </v-card-text>
          <!--         
            <p class="grey--text">Размер: {{product.dimensions}}</p>
            <p class="grey--text">Цвет корпуса: {{product.color}}</p> -->
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="3"><p class="grey--text">Lorem:</p></v-col>
              <v-col cols="9"
                ><p>{{ product.description }}</p></v-col
              >
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-text>
            <h5 class="text-h5 font-weight-bold">от {{ product.price }} р.</h5>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" x-large dark class="mr-2">
              В корзину
              <v-icon class="ml-2">{{ icons.cart }}</v-icon>
            </v-btn>
            <v-btn x-large dark> Купить в один клик </v-btn>
          </v-card-actions>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet elevation="2" class="">
          <v-tabs v-model="tab">
            <v-tab v-for="i in tabsContent.length" :key="i" :href="`#tab-${i}`"
              >Tab {{ i }}</v-tab
            >
            <!-- <v-tab href="#tab-2">Tab2</v-tab>
            <v-tab href="#tab-3">Tab3</v-tab> -->
          </v-tabs>
          <v-divider></v-divider>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(content, i) in tabsContent"
              :key="i"
              :value="`tab-${i + 1}`"
            >
              <v-card-subtitle>
                <h6 class="text-h6 mb-4">{{ content.title }}</h6>
                {{ content.text }}
              </v-card-subtitle>
            </v-tab-item>
          </v-tabs-items>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiCartOutline,
  mdiHeart,
  mdiHeartOutline,
  mdiScaleUnbalanced,
  mdiStarOutline,
  mdiStarHalfFull,
  mdiStar,
} from "@mdi/js";
import "swiper/swiper.min.css";
export default {
  data() {
    return {
      icons: {
        scales: mdiScaleUnbalanced,
        heart: mdiHeartOutline,
        heartFilled: mdiHeart,
        cart: mdiCartOutline,
        empty: mdiStarOutline,
        half: mdiStarHalfFull,
        full: mdiStar,
      },
      breadcrumbs: [
        {
          text: "Главная",
          disabled: false,
          href: "/",
        },
        {
          text: "Шкафы-купе",
          disabled: false,
          href: "#",
        },
        {
          text: "Встроенный шкаф-купе",
          disabled: true,
          href: "#",
        },
      ],
      product: null,
      // product: {
      //   title: "Встроенный шкаф купе",
      //   rating: 3.6,
      //   art: "AF0000001952",
      //   materials: "ЛДСП",
      //   dimensions: "Ширина 140 см / Глубина 60 см / Высота 240 см",
      //   color: "Дуб ирландский",
      //   description: "Пункт №1",
      //   price: "33 865",
      // },
      tabsContent: [
        {
          title: "Tab 1 content",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio exercitationem, excepturi similique nulla, voluptatem reprehenderit neque a minima eaque tenetur? Quos fugit voluptate enim quo sed, minima error molestias!",
        },
        {
          title: "Tab 2 content",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio exercitationem, excepturi similique nulla, voluptatem reprehenderit neque a minima eaque tenetur? Quos fugit voluptate enim quo sed, minima error molestias!",
        },
        {
          title: "Tab 3 content",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio exercitationem, excepturi similique nulla, voluptatem reprehenderit neque a minima eaque tenetur? Quos fugit voluptate enim quo sed, minima error molestias!",
        },
      ],
      tab: null,
    };
  },
  async mounted() {
    // mocking request
    if (!this.catalog.length) {
      await this.$store.dispatch("catalog/getCatalog");
    }
    this.product = this.catalog.find(product => product.id === this.$route.params.id)
    // 
    this.$nextTick(() => {
      this.sliders = {
      main: null,
      thumbs: null,
    };

    this.sliders.thumbs = new this.$swiper(".product-slider__thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,

      modules: [this.$swiperModules.Autoplay, this.$swiperModules.Thumbs],
    });

    this.sliders.main = new this.$swiper(".product-slider", {
      spaceBetween: 10,
      thumbs: {
        swiper: this.sliders.thumbs,
      },
      modules: [this.$swiperModules.Autoplay, this.$swiperModules.Thumbs],
    });
    })
    
  },
  methods: {
    onScalesClick() {},
    onStorageBtnClick() {},
  },
  computed: {
    inFavorites() {},
    inCart() {},
    catalog() {
      return this.$store.getters["catalog/all"];
    },
  },
};
</script>

<style scoped>
.product-page {
  padding-bottom: 80px;
}

.product-slider {
  height: 80%;
  width: 100%;
}

.product-slider__thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.product-slider__thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.product-slider__thumbs .swiper-slide-thumb-active {
  opacity: 1;
}

.product-views section {
  height: 600px;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>