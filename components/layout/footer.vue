<template>
  <v-footer absolute padless dark >
   
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn icon class="mx-4" v-for="(item, i) in social" :key="i" :color="item.color">
          <v-icon large >
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="footer-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium qui id voluptatum eaque quidem deserunt asperiores, atque nostrum quis commodi quod! Libero maiores a vero quidem amet soluta unde!
      </v-card-text>
      <v-card-text class="text-overline"> Ханса-Мебель www.xansa.ru &copy; {{ new Date().getFullYear() }}</v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiWhatsapp } from "@mdi/js";
import tgIcon from "~/static/images/icons/tg";
export default {
  data() {
    return {
      social: [
        {
          icon: mdiFacebook,
          color: "indigo",
        },
        {
          icon: mdiWhatsapp,
          color: "success",
        },
        {
          icon: tgIcon,
          color: "blue",
        },
      ],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium qui id voluptatum eaque quidem deserunt asperiores, atque nostrum quis commodi quod! Libero maiores a vero quidem amet soluta unde!",
    };
  },
};
</script>

<style scoped>
.footer-text {
  max-width: 80%;
  margin: 0 auto;
}
</style>