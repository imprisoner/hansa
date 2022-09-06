<template>
  <div class="ui-footer">
    <section class="ui-footer__about">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="">
            <h5 class="text-h5 orange--text font-weight-bold text-center">
              Мебельное производство интернет-магазин "Ханса-Мебель"
            </h5>
            <p class="text-body-1 white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur qui explicabo modi, iusto tempora quae ut? Atque, autem
              optio voluptas, soluta debitis porro qui ut possimus, aliquid odit
              nisi dicta. Labore culpa, praesentium perspiciatis deserunt vero
              odio ex error unde quo omnis? Autem ullam, beatae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vel, officia.
              Provident consectetur ipsum molestiae cumque labore sunt corporis
              aliquid, aut facere commodi quibusdam laborum aliquam in
              repudiandae, aperiam unde mollitia? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis iusto officiis debitis magnam
              optio sed quidem explicabo architecto facilis est fugit minus sint
              distinctio voluptate dolorum, cupiditate pariatur deleniti
              perspiciatis.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="ui-footer__nav">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Информация
                  </v-list-item-title>
                </template>

                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Cлужба поддержки
                  </v-list-item-title>
                </template>

                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Дополнительно
                  </v-list-item-title>
                </template>

                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Личный кабинет
                  </v-list-item-title>
                </template>

                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-divider dark inset class="mx-auto"></v-divider>
    <section class="ui-footer__bottom">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Контакты
                  </v-list-item-title>
                </template>
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
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Полезные ссылки
                  </v-list-item-title>
                </template>
                <ui-footer-policy-dialog />
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Наша гарантия
                  </v-list-item-title>
                </template>
                <v-list-item>
                  <v-list-item-content>
                    Недовольны своей покупкой? Вы можете вернуть ее в течении 30
                    дней с даты получения, согласно
                    <span class="rules-trigger orange--text">
                      нашим правилам
                    </span>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="6">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-group :append-icon="icons.expand">
                <template v-slot:activator>
                  <v-list-item-title
                    class="text-subtitle-1 text-uppercase font-weight-medium"
                  >
                    Новостная рассылка
                  </v-list-item-title>
                </template>
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
                  ></v-text-field> </v-list-item
              ></v-list-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-divider dark inset class="mx-auto"></v-divider>
  </div>
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
      selected: "",
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

<style scoped>
.ui-footer {
  padding-bottom: 230px;
  background-color: #1e1e1e;
}

@media (max-width: 599px) {
  .ui-footer {
    padding-bottom: 318px;
    background-color: #1e1e1e;
  }
}

.ui-footer__about {
  padding-top: 40px;
  padding-bottom: 20px;
  background: url(/images/footer/bg.webp) top/cover no-repeat;
}

.ui-footer__about h5 {
  margin-bottom: 24px;
}

.ui-footer__nav {
  padding: 20px 0;
}
/* .ui-footer__navlist h5 {
  margin-bottom: 24px;
} */
.ui-footer__navlist .v-list-item {
  opacity: 0.8;
}
</style>