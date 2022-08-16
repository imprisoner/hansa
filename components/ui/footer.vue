<template>
  <div class="ui-footer">
    <section class="ui-footer__about">
      <v-container>
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
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-list class="ui-footer__navlist" flat dark>
              <h5 class="text-h5 text-uppercase font-weight-medium">
                Информация
              </h5>
              <v-list-item-group v-model="selected">
                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list class="ui-footer__navlist" flat dark>
              <h5 class="text-h5 text-uppercase font-weight-medium">
                Cлужба поддержки
              </h5>
              <v-list-item-group v-model="selected">
                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list class="ui-footer__navlist" flat dark>
              <h5 class="text-h5 text-uppercase font-weight-medium">
                Дополнительно
              </h5>
              <v-list-item-group v-model="selected">
                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list class="ui-footer__navlist" flat dark>
              <h5 class="text-h5 text-uppercase font-weight-medium">
                Личный кабинет
              </h5>
              <v-list-item-group v-model="selected">
                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, tenetur?</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-divider dark inset></v-divider>
    <section class="ui-footer__bottom">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-list class="ui-footer__navlist" flat dark>
              <v-list-item-group v-model="selected">
                <h5 class="text-h5 text-uppercase font-weight-medium">
                  Контакты
                </h5>
                <v-list-item link to
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, accusantium!</v-list-item
                >
                <v-list-item link to>Каталог</v-list-item>
                <v-list-item link to>О нас</v-list-item>
                <v-list-item link to>Условия оплаты и доставки</v-list-item>
                <v-list-item link to>Политика конфиденциальности</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style scoped>
.ui-footer {
  padding-bottom: 76px;
  background-color: #1e1e1e;
}

.ui-footer__about {
  padding-top: 40px;
  padding-bottom: 20px;
  background: url(/images/footer/bg.jpg) top/cover no-repeat;
}

.ui-footer__about h5 {
  margin-bottom: 24px;
}

.ui-footer__nav {
  padding: 20px 0;
}
.ui-footer__navlist h5 {
  margin-bottom: 24px;
}

.ui-footer__navlist .v-list-item {
  opacity: 0.8;
}
</style>