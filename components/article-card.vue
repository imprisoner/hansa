<template>
  <v-col cols="12" sm="6" md="4">
    <v-card class="article-card">
      <v-img :src="article.image.url" :alt="article.image.alt"> </v-img>
      <v-card-title>{{ article.title }}</v-card-title>
      <div class="d-flex justify-space-between align-center">
        <v-card-subtitle>{{ article.publish_date }}</v-card-subtitle>
        <v-card-actions>
          <v-btn large link text color="primary" :to="article.url"
            >Читать</v-btn
          >
        </v-card-actions>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['article']
};
</script>

<style>
</style>