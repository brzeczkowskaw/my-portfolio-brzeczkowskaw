<script setup lang="ts">
import { tools } from '../variables/tools'

</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      Tools
    </h2>
    <div class="d-flex justify-center">
      <v-card 
        class="tools-card pa-4 mx-5 my-10 text-center" 
        color="background"
        elevation="8"
      >
        <div class="my-8">
          <v-card 
            v-for="tool in tools" 
            :key="tool.name"
            class="d-inline-flex pa-3 ma-2 rounded-lg"
            width="160"
            color="primary"
            elevation="10"
          >
            <v-icon class="mr-5">{{tool.icon}}</v-icon>
            <p>{{ tool.name }}</p>
          </v-card>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mallanna&family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Mallanna&family=Squada+One&display=swap');

p, h2, h3, h1 {
  font-family: "Saira Semi Condensed"
}
p {
  font-size: 1.1rem;
}
.tools-card {
  width: 40vw;
  margin-top: 3rem;
}
@media(max-width: 480px) {
  .tools-card {
    width: 90vw;
    margin-top: 0;
  }
}
</style>
