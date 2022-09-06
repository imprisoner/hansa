<template>
  <v-dialog v-model="dialog" max-width="500px">
    <!-- :fullscreen="$vuetify.breakpoint.mobile" -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        :x-large="$vuetify.breakpoint.mdAndUp"
        v-if="$vuetify.breakpoint.mdAndUp"
        color="white"
        dark
        v-on="on"
        v-bind="attrs"
      >
        <span> Заказать звонок </span>
      </v-btn>
      <v-btn icon class="mr-2" v-on="on" v-bind="attrs" v-else>
        <v-icon :size="iconSize">{{ icons.phone }}</v-icon>
      </v-btn>
    </template>

    <v-card :tile="$vuetify.breakpoint.mobile">
      <v-tabs class="px-4 pt-2 mb-8" v-model="formTabs" hide-slider grow :vertical="$vuetify.breakpoint.xsOnly">
        <v-tab class="text-body-2">Оставить заявку</v-tab>
        <v-tab class="text-body-2">Позвонить</v-tab>
      </v-tabs>
      <v-tabs-items v-model="formTabs" class="tab-content">
        <v-tab-item>
          <v-card-actions>
            <v-form class="flex-grow-1">
              <!-- <v-divider class="mb-6"></v-divider> -->
              <v-text-field
                v-model="form.name"
                label="Ваше имя"
                outlined
                dense
              ></v-text-field>
              <div class="d-flex justify-content-between flex-column">
                <v-text-field
                  v-model="form.email"
                  label="Почта"
                  outlined
                  dense
                />
                <v-text-field
                  v-model="form.phone"
                  label="Телефон"
                  outlined
                  dense
                />
              </div>
              <v-textarea
                v-model="form.message"
                label="Ваше сообщение"
                outlined
                no-resize
              />
            </v-form>
          </v-card-actions>
        </v-tab-item>
        <v-tab-item>
          <v-card-actions class="d-block">
            <div v-for="(pos, i) in phoneNumbers" :key="i">
              <div class="py-2">
                <v-subheader> {{ pos.text }} </v-subheader>
                <v-btn :href="'tel:' + pos.number" text>
                  <v-icon class="mr-2" color="success">{{
                    icons.phone
                  }}</v-icon>
                  {{ pos.number }}
                </v-btn>
              </div>
              <v-divider />
            </div>
            <span class="d-block text-subtitle-2 py-2 text-center">
              Работаем ежедневно с 8:00 до 18:00
            </span>
            <v-divider></v-divider>
            <p class="text-subtitle-2 text-regular text-center pt-4">
              Мы в соцсетях
            </p>
            <div class="d-flex justify-center">
              <v-btn
                icon
                :small="$vuetify.breakpoint.smAndDown"
                v-for="(s, i) in social"
                :key="i"
                :href="s.href"
                class="pb-2 mx-2"
              >
                <v-icon large :small="$vuetify.breakpoint.smAndDown">
                  {{ s.icon }}
                </v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-tab-item>
      </v-tabs-items>
      <v-card-actions class="d-block">
        <v-divider class="mb-6"></v-divider>
        <div class="d-flex justify-space-between">
          <v-btn @click="onClose" text color="warning">Закрыть</v-btn>
          <v-btn @click="onSubmit" text color="success" v-if="formTabs === 0"
            >Отправить</v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose, mdiPhoneOutline, mdiFacebook, mdiWhatsapp } from "@mdi/js";
import tgIcon from "~/static/images/icons/tg";
export default {
  props: ["iconSize"],
  data() {
    return {
      formTabs: "",
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      dialog: false,
      icons: {
        close: mdiClose,
        phone: mdiPhoneOutline,
      },
      social: [
        {
          icon: mdiFacebook,
          href: "#",
        },
        {
          icon: mdiWhatsapp,
          href: "#",
        },
        {
          icon: tgIcon,
          href: "#",
        },
      ],
      phoneNumbers: [
        {
          number: "+79990001122",
          text: "Техподдержка",
        },
        {
          number: "+79990001222",
          text: "Персональный консультант",
        },
        {
          number: "+79990001322",
          text: "ул. Кладовая стр.118 корп.3",
        },
      ],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$axios.$post("/api/notify/callback", { ...this.form }).then(() => {
        this.dialog = false;
        // TODO success toast
      });
      // restore form initial state
      Object.keys(this.form).forEach(field => {
        this.form[field] = ""
      })
    },
    onClose() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.full-height {
  height: calc(100vh - 88px);
}

.tab-content {
  min-height: 450px;
}
</style>