<template>
  <div class="swiper" :class="containerClass">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(product, i) in products" :key="i">
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper.min.css";

export default {
  props: ["products", "config", "containerClass"],
  data() {
    return {
      slider: null,
    };
  },
  mounted() {
      this.slider = new this.$swiper(`.${this.containerClass}`, {
        ...this.config,
        modules: [this.$swiperModules.Autoplay]
      });
  },
};
</script>

<style scoped>
.swiper .product-card {
  box-sizing: border-box;
  margin: 0 auto;
}
.swiper > .swiper-wrapper {
  padding: 5px 0;
}
</style>