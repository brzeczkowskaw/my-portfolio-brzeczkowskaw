<script setup lang="ts">
import { about } from "../variables/aboutMe"
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-[60vh] w-full px-4 py-12 sm:py-20 text-center">
    <p class="text-primary text-base sm:text-lg font-semibold mb-2 tracking-wide">Hello, my name is</p>
    <h1 class="font-extrabold text-3xl sm:text-5xl md:text-6xl mb-4 leading-tight font-sans" style="font-family: 'Special Elite', 'Saira Semi Condensed', Arial, sans-serif;">
      {{ about.name }}
    </h1>
    <div class="max-w-2xl w-full bg-neutral-900 rounded-2xl shadow-lg p-6 sm:p-10 mb-6">
      <p class="main-text mb-3 text-lg sm:text-xl text-gray-200">
        {{ about.mainText }}
      </p>
      <p class="main-text text-lg sm:text-xl text-gray-400">
        {{ about.mainText2 }}
      </p>
    </div>
    <a href="mailto: brzeczkowska.w@gmail.com">
      <button class="bg-primary text-neutral-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-primary/80 transition-colors text-lg mt-2">
        Get in touch
      </button>
    </a>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@400;700&family=Special+Elite&display=swap');
.font-sans {
  font-family: 'Saira Semi Condensed', Arial, sans-serif;
}
.main-text {
  font-family: 'Saira Semi Condensed', Arial, sans-serif;
}
</style>
