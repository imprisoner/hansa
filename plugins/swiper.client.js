import Swiper, {Autoplay, Thumbs} from 'swiper'
import Vue from 'vue'

const swiper = {
  install(Vue, options) {
      Vue.prototype.$swiper = Swiper;
      Vue.prototype.$swiperModules = {
        Autoplay, Thumbs
      };
  }
};

Vue.use(swiper);