<script setup lang="ts">
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <v-app id="app">
    <v-component>
      <Navbar />
      <Home class="mt-5" />
    </v-component>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mallanna&family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Headland+One&family=Mallanna&family=Saira+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Special+Elite&family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Mallanna&family=Special+Elite&family=Squada+One&display=swap');

p, h2, h3 {
  font-family: "Saira Semi Condensed"
}

#app {
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  background: rgb(var(--v-theme-background));
}
@media screen and (max-width: 1000px) {
  body {
    overflow-x: none;
  }
}
</style>
