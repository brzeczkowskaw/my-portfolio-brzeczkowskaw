<script setup lang="ts">
import { about } from "../variables/aboutMe"
</script>

<template>
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-20 mt-5">
    <div class="w-full md:w-4/5 bg-neutral-900 rounded-2xl shadow-lg p-6 sm:p-10 mb-6">
      <div class="flex items-center mb-4">
        <span class="text-2xl mr-3">⭐</span>
        <h2 class="text-2xl sm:text-3xl font-bold font-sans tracking-wide">Let's meet!</h2>
      </div>
      <div class="space-y-3 text-left">
        <p class="text-gray-200">{{ about.text }}</p>
        <p class="text-gray-200">{{ about.text2 }}</p>
        <p class="text-gray-200">{{ about.text3 }}</p>
        <p class="text-gray-200">{{ about.text4 }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@400;700&display=swap');
.font-sans {
  font-family: 'Saira Semi Condensed', Arial, sans-serif;
}
</style>
