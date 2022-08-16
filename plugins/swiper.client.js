import Swiper from 'swiper'
import Vue from 'vue'

const swiper = {
  install(Vue, options) {
      Vue.prototype.$swiper = Swiper;
      // Vue.prototype.$swiperModules = {
      //     Navigation,
      //     Pagination,
      //     Scrollbar
      // };
  }
};

Vue.use(swiper);