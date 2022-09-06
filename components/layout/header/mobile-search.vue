<template>
  <v-bottom-sheet hide-overlay dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
        <v-icon :size="iconSize">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <v-sheet class="text-center" height="200px">
      <div class="pa-4">
        <ui-search />
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: ['iconSize', 'icon'],
  data() {
    return {
      show: false
    }
  }
};
</script>

<style>
</style>