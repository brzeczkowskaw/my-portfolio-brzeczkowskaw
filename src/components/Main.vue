<script setup lang="ts">
import { about } from "../variables/aboutMe"
import { computed } from "vue"

const isScreenBig = computed(() => {
  return window.screen.availWidth > 750;
})
</script>

<template>
  <v-container fluid class="mt-7">
    <p class="text-primary">
      Hello, my name is
    </p>
    <h1>{{ about.name }}</h1>
    <v-card 
      color="background" 
      elevation="0" 
      :width="isScreenBig ? '70%' : '90%'" 
      class="pa-5"
    >
      <v-card-text>
        <p class="main-text mb-3 text-justify">
          {{ about.mainText }}
        </p>
        <p class="main-text text-justify">
          {{ about.mainText2 }}
        </p>
      </v-card-text>
    </v-card>
    <a href="mailto: brzeczkowska.w@gmail.com">
      <v-btn 
        color="primary" 
        class="text-white mx-8" 
        variant="outlined"
      >
        Get in touch
      </v-btn>
    </a>
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
.main-text {
  font-size: 1.3rem;
  line-height: 1.5rem;
}
</style>
