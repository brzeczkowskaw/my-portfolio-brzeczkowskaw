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
      <hr class="ml-4" style="width: 50%" size="1" />  
    </h2>
    <v-card color="background" elevation="0" class="pa-3">
      <v-card-text>
        <p class="mb-2">{{ about.text }}</p>
        <p class="mb-2">{{ about.text2 }}</p> 
        <p class="mb-2">{{ about.text3 }}</p> 
        <p class="mb-2">{{ about.text4 }}</p> 
      </v-card-text>
    </v-card>
      <v-img 
        :src="`src/assets/${about.photo}.jpg`"
        class="photo"
      />
  </v-container>
</template>

<style scoped>
h2,
h3 {
  font-family: "Mallana"
}
p {
  font-family: "Mallana";
  font-size: 1.1rem;
}
h1 {
  font-family: "Special Elite"
}
.photo {
  height: 15em;
  border-radius: 50px;
  opacity: 0.5;
}
.photo:hover {
  opacity: 1;
}
</style>
