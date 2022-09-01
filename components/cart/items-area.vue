<template>
  <v-col
    cols="11"
    md="8"
    ref="itemsArea"
    class="items-area"
    :class="{ scrollable: isScrollable }"
    :style="
      scrollable ? '' : `padding-right: ${initialPadding + scrollbarWidth}px`
    "
  >
    <cart-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
      @removed="
        $nextTick(() => {
          calcHeight();
        })
      "
    />
  </v-col>
</template>

<script>
export default {
  mounted() {
    this.calcHeight();

    // compute scrollbarWidth
    let div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
    this.scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    this.initialPadding = parseInt(getComputedStyle(this.$el).padding);
  },
  props: ["cart"],
  data() {
    return {
      scrollable: false,
      scrollbarWidth: 0,
      initialPadding: 0,
    };
  },
  methods: {
    onItemRemoved() {
      this.scrollable = this.calcHeight();
    },
    calcHeight() {
      this.scrollable = this.$el.scrollHeight > window.innerHeight - 266;
    },
    
  },
  computed: {
    isScrollable() {
      return this.$vuetify.breakpoint.mdAndUp && this.scrollable;
    },
  }
};
</script>

<style scoped>
.items-area {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.items-area.scrollable {
  overflow-y: scroll;
  max-height: calc(100vh - 74px - 80px - 64px - 48px);
}
</style>