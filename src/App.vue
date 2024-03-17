<script setup lang="ts">
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <v-app id="app">
    <component :is="layoutComponent || 'div'">
      <Navbar />
      <Home class="mt-5" />
    </component>
  </v-app>
</template>

<style scoped>

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
