<script setup lang="ts">
import { tools } from '../variables/tools'

</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      Tools I use
    </h2>
    <v-card 
      class="pa-4 mx-5 my-10 text-center" 
      color="background"
      elevation="8"
      width="80vw"
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
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mallanna&family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Mallanna&family=Squada+One&display=swap');

h2 {
  font-family: "Mallana"
}
p {
  font-family: "GFS Didot"
}
</style>
