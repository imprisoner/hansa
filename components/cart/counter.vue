<template>
  <div class="counter d-flex align-center">
    <!-- <v-btn text depressed color="primary" width="40" height="40">-</v-btn> -->
    <v-btn icon @click="decrease">
      <v-icon color="primary">
        {{ icons.minus }}
      </v-icon>
    </v-btn>
    <v-text-field
      class="counter__input"
      hide-details
      hide-spin-buttons
      dense
      single-line
      height="36"
      :value="value"
      @input="onInput"
    />
    <v-btn icon @click="increase">
      <v-icon color="primary">
        {{ icons.plus }}
      </v-icon>
    </v-btn>
    <!-- <v-btn text depressed color="primary" width="40" height="40">+</v-btn> -->
  </div>
</template>

<script>
import { mdiMinus, mdiPlus } from "@mdi/js";
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.value = this.count;
  },
  data() {
    return {
      icons: {
        minus: mdiMinus,
        plus: mdiPlus,
      },
      value: 1,
    };
  },
  computed: {},
  methods: {
    decrease() {
      this.count > 1 && this.$emit("counter", { count: this.count - 1 });
      this.$nextTick(() => (this.value = this.count));
      
    },
    increase() {
      this.count < this.max && this.$emit("counter", { count: this.count + 1 });
      this.$nextTick(() => (this.value = this.count));
    },
    onInput(e) {
      if (e > this.max) {
        this.value = 0;
        this.$emit("counter", {count: this.max})
        return this.$nextTick(() => {
          this.value = this.max;
        });
      }
      if (e < 1) {
        this.value = 0;
        this.$emit("counter", {count: 1})
        return this.$nextTick(() => {
          this.value = 1;
        });
      }

      // if input value is in range
      this.$emit("counter", { count: parseInt(e) });
    },
  },
};
</script>

<style>
.counter__input {
  width: 32px;
  margin: 0 4px;
}

.counter__input input {
  text-align: center;
}
</style>