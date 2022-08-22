import Swiper, {Thumbs, Autoplay, FreeMode, } from 'swiper'
import Vue from 'vue'

const swiper = {
  install(Vue, options) {
      Vue.prototype.$swiper = Swiper;
      Vue.prototype.$swiperModules = {
        Thumbs, Autoplay, FreeMode
      };
  }
};

Vue.use(swiper);