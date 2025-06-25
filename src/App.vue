<script setup lang="ts">
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="dark min-h-screen bg-neutral-950 text-gray-100 transition-colors duration-300">
    <header class="sticky top-0 z-50">
      <Navbar />
    </header>
    <main>
      <Home class="mt-5" />
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
:global(html) {
  font-family: 'Inter', 'Saira Semi Condensed', Arial, sans-serif;
}
</style>
