import Swiper from 'swiper/core/core.js'

import Autoplay from 'swiper/modules/autoplay/autoplay.js';
import Thumbs from 'swiper/modules/thumbs/thumbs.js';
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