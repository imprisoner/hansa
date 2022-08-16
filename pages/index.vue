<template>
  <div>
    <section style="background: url(/images/index/bg.jpg)" class="white--text">
      <v-container class="py-12">
        <v-row class="mb-8">
          <v-col cols="7">
            <h2 class="text-h4 font-weight-bold mb-4">
              Мебельный Интернет-Магазин
            </h2>
            <h3 class="text-h4 mb-6">
              Кухни на заказ по индивидуальным проектам
            </h3>
            <p class="text-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              asperiores molestias dolorum quod nostrum deleniti id nam porro
              cumque amet, neque vel. Doloribus dicta, provident alias atque
              eveniet recusandae quis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugit asperiores molestias dolorum quod nostrum
              deleniti id nam porro cumque amet, neque vel. Doloribus dicta,
              provident alias atque eveniet recusandae quis.
            </p>
          </v-col>
          <v-col cols="5">
            <v-img max-height="380" src="/images/index/image.png"></v-img>
          </v-col>
          <v-col cols="12">
            <v-btn color="orange text-white">Подробнее</v-btn>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="3">
            <v-icon size="64" class="mb-6" color="white">{{
              icons.guarantee
            }}</v-icon>
            <h5 class="text-h6">Гарантия 100% возврата денежных средств</h5>
          </v-col>
          <v-col cols="3">
            <v-icon size="64" class="mb-6" color="white">{{
              icons.delivery
            }}</v-icon>
            <h5 class="text-h6">Доставка по Санкт-Петербургу и Лен-Области</h5>
          </v-col>
          <v-col cols="3">
            <v-icon size="64" class="mb-6" color="white">{{
              icons.order
            }}</v-icon>
            <h5 class="text-h6">
              Возможность оформление заказа без регистрации
            </h5>
          </v-col>
          <v-col cols="3">
            <v-icon size="64" class="mb-6" color="white">{{
              icons.sale
            }}</v-icon>
            <h5 class="text-h6">Скидки постоянным покупателям</h5>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="6" v-for="(cat, i) in categories" :key="i">
            <v-card>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title> {{ cat.title }} </v-card-title>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item v-for="(link, j) in cat.links" :key="j">
                      {{ link.label }}
                    </v-list-item>
                  </v-list>
                </div>
                <div>
                  <v-avatar tile size="250" class="pa-4">
                    <v-img :src="cat.image.url" max-height="234" contain />
                  </v-avatar>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="mb-8">
          <v-col cols="12">
            <div class="d-flex justify-space-between align-baseline">
              <h3 class="text-h4">Хиты продаж</h3>
              <v-btn text small link color="primary" to="#" class="text-button"
                >Перейти в каталог
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="swiper hits-slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, i) in products"
                  :key="i"
                >
                  <product-card :product="product" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!--  -->
      </v-container>
    </section>
    <section
      style="background: url(/images/index/new-bg.jpg)"
      class="white--text"
    >
      <v-container>
        <v-row>
          <v-col cols="4">
            <h3 class="text-h3 mb-12">Новинки</h3>
            <p class="text-body-1 grey--text darken-1 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ratione laudantium rem non vitae cumque? Officiis, unde laudantium
              officia nulla, dolore a totam consequatur vitae labore et sed,
              quae est.
            </p>
            <v-btn text link to="#" color="orange">Больше новинок</v-btn>
          </v-col>
          <v-col cols="8">
            <div class="swiper new-slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, i) in products"
                  :key="i"
                >
                  <product-card :product="product" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!--  -->
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="justify-space-between align-baseline mb-8">
          <v-col cols="12">
            <div class="d-flex justify-space-between align-baseline">
              <h3 class="text-h3">Акции</h3>
              <v-btn text link color="primary" to="#" class="text-button"
                >Все акции
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="swiper discounts-slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, i) in products"
                  :key="i"
                >
                  <product-card :product="product" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!--  -->
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="justify-space-between align-baseline mb-8">
          <h3 class="text-h3">Наши статьи</h3>
          <v-btn text link color="primary" to="#" class="text-button"
            >Перейти в блог
          </v-btn>
        </v-row>
        <v-row>
          <v-col cols="4" v-for="(article, i) in articles" :key="i">
            <v-card class="article-card">
              <v-img :src="article.image.url" :alt="article.image.alt"> </v-img>
              <v-card-title>{{ article.title }}</v-card-title>
              <div class="d-flex justify-space-between align-center">
                <v-card-subtitle>{{ article.publish_date }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn large link text color="primary" :to="article.url"
                    >Читать</v-btn
                  >
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col cols="6" v-for="(item, i) in unknown" :key="i">
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
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="justify-space-between align-baseline mb-8">
          <v-col cols="12">
            <div class="d-flex justify-space-between align-baseline">
              <h3 class="text-h3">Кухни</h3>
              <v-btn text link color="primary" to="#" class="text-button"
                >Все кухни
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="swiper kitchens-slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, i) in kitchens"
                  :key="i"
                >
                  <product-card :product="product" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!--  -->
      </v-container>
    </section>
  </div>
</template>

<script>
import {
  mdiCheckDecagramOutline,
  mdiTruckDeliveryOutline,
  mdiClipboardCheckOutline,
  mdiSaleOutline,
} from "@mdi/js";

// import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import "swiper/swiper.min.css";

export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  mounted() {
    const sliderSections = ["hits", "discounts", "kitchens", "new"];
    const entries = sliderSections.map((key) => [key, null]);

    this.sliders = Object.fromEntries(entries);

    this.sliders.hits = new this.$swiper(".hits-slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      direction: "horizontal",
      centeredSlides: true,
      autoHeight: true,
      // configure Swiper to use modules
      // modules: [
      //   this.$swiperModules.Navigation,
      //   this.$swiperModules.Pagination,
      //   this.$swiperModules.Scrollbar,
      // ],
    });
    this.sliders.kitchens = new this.$swiper(".kitchens-slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      direction: "horizontal",
      centeredSlides: true,
      autoHeight: true,
      // configure Swiper to use modules
      // modules: [
      //   this.$swiperModules.Navigation,
      //   this.$swiperModules.Pagination,
      //   this.$swiperModules.Scrollbar,
      // ],
    });
    this.sliders.discounts = new this.$swiper(".discounts-slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      direction: "horizontal",
      centeredSlides: true,
      autoHeight: true,
    });
    this.sliders.new = new this.$swiper(".new-slider", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 2,
      direction: "horizontal",
      // centeredSlides: true,
      autoHeight: true,
    });
  },
  name: "IndexPage",
  data() {
    return {
      icons: {
        guarantee: mdiCheckDecagramOutline,
        delivery: mdiTruckDeliveryOutline,
        order: mdiClipboardCheckOutline,
        sale: mdiSaleOutline,
      },
      categories: [
        {
          title: "Шкафы",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "/images/products/closet.jpg",
            alt: "",
          },
        },
        {
          title: "Кухни",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "/images/products/kitchen.jpg",
            alt: "",
          },
        },
        {
          title: "Мягкая мебель",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "/images/products/soft.jpg",
            alt: "",
          },
        },
        {
          title: "Тумбочки",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "/images/products/stand.jpg",
            alt: "",
          },
        },
        {
          title: "Сопутствующие товары",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "/images/products/accessories.jpg",
            alt: "",
          },
        },
        {
          title: "Lorem Ipsum",
          links: [
            {
              label: "Ссылка 1",
              href: "#",
            },
            {
              label: "Ссылка 2",
              href: "#",
            },
            {
              label: "Ссылка 3",
              href: "#",
            },
          ],
          image: {
            url: "",
            alt: "",
          },
        },
      ],
      products: [
        {
          id: 1,
          title: "Шкаф купе",
          dimensions: [80, 50, 240],
          materials: ["Орех", "Алюминий"],
          rating: 3.6,
          price: 70719,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/closet.jpg",
            alt: "",
          },
          description:
            "Шкаф-купе Бэст 4 BMS поможет дополнить интерьер спальни.",
        },
        {
          id: 2,
          title: "Шкаф купе",
          dimensions: [80, 50, 240],
          materials: ["Белёный дуб", "Сталь"],
          rating: 3.6,
          price: 70719,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/closet.jpg",
            alt: "",
          },
          description:
            "Шкаф-купе Бэст 4 BMS поможет дополнить интерьер спальни.",
        },
        {
          id: 3,
          title: "Шкаф купе",
          dimensions: [80, 50, 240],
          materials: ["Чёрное дерево", "Хром"],
          rating: 3.6,
          price: 70719,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/closet.jpg",
            alt: "",
          },
          description:
            "Шкаф-купе Бэст 4 BMS поможет дополнить интерьер спальни.",
        },
        {
          id: 4,
          title: "Шкаф купе",
          dimensions: [80, 50, 240],
          materials: ["Черное дерево", "Алюминий"],
          rating: 3.6,
          price: 70719,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/closet.jpg",
            alt: "",
          },
          description:
            "Шкаф-купе Бэст 4 BMS поможет дополнить интерьер спальни.",
        },
      ],
      articles: [
        {
          title: "Все о кухнях: как правильно выбрать",
          publish_date: "13.06.2022",
          image: {
            url: "/images/articles/01.jpg",
            alt: "",
          },
          url: "#",
        },
        {
          title: "Как правильно выбрать кухню",
          publish_date: "13.06.2022",
          image: {
            url: "/images/articles/02.jpg",
            alt: "",
          },
          url: "#",
        },
        {
          title: "Как правильно выбрать шкаф",
          publish_date: "13.06.2022",
          image: {
            url: "/images/articles/03.jpg",
            alt: "",
          },
          url: "#",
        },
        {
          title: "Как правильно выбрать комод",
          publish_date: "13.06.2022",
          image: {
            url: "/images/articles/04.jpg",
            alt: "",
          },
          url: "#",
        },
      ],
      unknown: [
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
      ],
      kitchens: [
        {
          id: 1,
          title: "Кухня",
          dimensions: [80, 50, 240],
          materials: ["Орех", "Алюминий"],
          rating: 3.6,
          price: 125000,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/kitchen.jpg",
            alt: "",
          },
          description:
            "Шкаф-купе Бэст 4 BMS поможет дополнить интерьер спальни.",
        },
        {
          id: 2,
          title: "Кухня",
          dimensions: [80, 50, 240],
          materials: ["Белёный дуб", "Сталь"],
          rating: 3.6,
          price: 125000,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/kitchen.jpg",
            alt: "",
          },
          description:
            "Кухонный гарнитур Kitchen-Fast поможет дополнить интерьер кухни.",
        },
        {
          id: 3,
          title: "Кухня",
          dimensions: [80, 50, 240],
          materials: ["Чёрное дерево", "Хром"],
          rating: 3.6,
          price: 125000,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/kitchen.jpg",
            alt: "",
          },
          description:
            "Кухонный гарнитур Kitchen-Fast поможет дополнить интерьер кухни.",
        },
        {
          id: 4,
          title: "Кухня",
          dimensions: [80, 50, 240],
          materials: ["Черное дерево", "Алюминий"],
          rating: 3.6,
          price: 125000,
          feedbacks: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
          ],
          image: {
            url: "/images/products/kitchen.jpg",
            alt: "",
          },
          description:
            "Кухонный гарнитур Kitchen-Fast поможет дополнить интерьер кухни.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper .product-card {
  box-sizing: border-box;
  margin: 0 auto;
}

section:not(:first-child) {
  padding: 40px 0;
}

.swiper > .swiper-wrapper {
  padding: 5px 0;
}

.article-card {
  height: 100%;
}

.article-card .v-card__title {
  word-break: break-word;
  min-height: 96px;
  align-items: baseline;
}
</style>