<template>
  <section class="ui-footer__bottom">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-expansion-panels
            flat
            :mandatory="!$vuetify.breakpoint.mobile"
            dark
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                :expand-icon="$vuetify.breakpoint.mobile ? icons.expand : ''"
                class="text-h5 text-uppercase font-weight-medium"
              >
                Контакты
              </v-expansion-panel-header>
              <v-expansion-panel-content class="ui-footer__navlist">
                <v-list-item href="tel:+88007774967">
                  <v-list-item-icon>
                    <v-icon>
                      {{ icons.phone }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content> 8 (800) 777-49-67 </v-list-item-content>
                </v-list-item>
                <v-list-item disabled>
                  <v-list-item-icon>
                    <v-icon>
                      {{ icons.clock }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    пн-пт 10:00–19:00;<br />
                    сб 10:00–15:00;
                  </v-list-item-content>
                </v-list-item>
                <v-list-item disabled>
                  <v-list-item-icon>
                    <v-icon>
                      {{ icons.marker }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    Балтийская, Нарвская, Фрунзенская Михайловский пер., 7А,
                    лит.В
                  </v-list-item-content>
                </v-list-item>
                <v-list-item href="mailto:info@xansa.ru">
                  <v-list-item-icon>
                    <v-icon>
                      {{ icons.envelope }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content> info@xansa.ru </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="4">
          <v-expansion-panels
            flat
            :mandatory="!$vuetify.breakpoint.mobile"
            dark
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                :expand-icon="$vuetify.breakpoint.mobile ? icons.expand : ''"
                class="text-h5 text-uppercase font-weight-medium"
              >
                Полезные ссылки
              </v-expansion-panel-header>
              <v-expansion-panel-content class="ui-footer__navlist">
                <lazy-ui-footer-policy-dialog />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="4">
          <v-expansion-panels
            flat
            :mandatory="!$vuetify.breakpoint.mobile"
            dark
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                :expand-icon="$vuetify.breakpoint.mobile ? icons.expand : ''"
                class="text-h5 text-uppercase font-weight-medium"
              >
                Наша гарантия
              </v-expansion-panel-header>
              <v-expansion-panel-content class="ui-footer__navlist">
                <v-list-item>
                  <v-list-item-content>
                    Недовольны своей покупкой? Вы можете вернуть ее в течении 30
                    дней с даты получения, согласно
                    <span class="rules-trigger orange--text">
                      нашим правилам
                    </span>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="4">
          <v-expansion-panels
            flat
            :mandatory="!$vuetify.breakpoint.mobile"
            dark
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                :expand-icon="$vuetify.breakpoint.mobile ? icons.expand : ''"
                class="text-h5 text-uppercase font-weight-medium"
              >
                Новостная рассылка
              </v-expansion-panel-header>
              <v-expansion-panel-content class="ui-footer__navlist">
                <v-list-item inactive>
                  <v-list-item-title>
                    Подпишитесь прямо сейчас!
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-text-field
                    label="Ваша почта"
                    color="orange"
                    dense
                    outlined
                    :append-outer-icon="icons.emailArrow"
                  ></v-text-field>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {
  mdiMapMarker,
  mdiPhone,
  mdiClockOutline,
  mdiEmailFastOutline,
  mdiEmailArrowRightOutline,
  mdiChevronUp,
} from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        phone: mdiPhone,
        clock: mdiClockOutline,
        marker: mdiMapMarker,
        envelope: mdiEmailFastOutline,
        emailArrow: mdiEmailArrowRightOutline,
        expand: mdiChevronUp,
      },
    };
  },
};
</script>

<style>
</style>