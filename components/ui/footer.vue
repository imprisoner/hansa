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
    <client-only>
      <ui-footer-nav-top />
    </client-only>

    <v-divider dark inset class="mx-auto"></v-divider>
    <client-only>
      <lazy-ui-footer-nav-bottom />
    </client-only>
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
  padding-bottom: 208px;
  background-color: #1e1e1e;
}

@media (max-width: 599px) {
  .ui-footer {
    padding-bottom: 318px;
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
</style>