<script setup lang="ts">
import { about } from "../variables/aboutMe"
</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      Let's meet!
    </h2>
    <v-card color="background" elevation="0" class="pa-3">
      <v-card-text>
        <p class="mb-2 text-justify">{{ about.text }}</p>
        <p class="mb-2 text-justify">{{ about.text2 }}</p> 
        <p class="mb-2 text-justify">{{ about.text3 }}</p> 
        <p class="mb-2 text-justify">{{ about.text4 }}</p> 
      </v-card-text>
    </v-card>
    <div align="center">
      <v-img 
        :src="`./assets/${about.photo}.jpg`"
        class="photo"
      />
    </div>
  </v-container>
</template>

<style scoped>
p, h2, h3, h1 {
  font-family: "Saira Semi Condensed"
}
p {
  font-size: 1.1rem;
}
.photo {
  height: 15em;
  max-width: 11em;
  border-radius: 20px;
  opacity: 0.5;
}
.photo:hover {
  opacity: 1;
}
</style>
