<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const listItems = [
  { title: 'About', to: '#about' },
  { title: 'CV', to: '#cv' },
  { title: 'Tools', to: '#tools' },
  { title: 'Projects', to: '#page-projects' },
  { title: 'UI projects', to: '#ui-projects' },
  { title: 'Contact', to: '#contact' },
]
function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-neutral-900/90 shadow-md transition-all duration-300">
    <div class="w-full flex items-center justify-between h-14 px-4">
      <div class="text-lg font-extrabold tracking-widest select-none text-primary font-sans">
        Weronika
      </div>
      <!-- Desktop nav -->
      <ul class="hidden md:flex flex-row gap-8 text-sm font-semibold uppercase tracking-wide items-center h-full">
        <li v-for="item in listItems" :key="item.title">
          <a
            :href="item.to"
            class="flex items-center h-full px-2 text-gray-100 hover:text-primary transition-colors duration-200 font-sans after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
      <!-- Hamburger for mobile -->
      <button class="md:hidden flex flex-col gap-1 p-2 focus:outline-none" @click="isOpen = !isOpen" aria-label="Open menu">
        <span class="block w-6 h-0.5 bg-gray-100 rounded"></span>
        <span class="block w-6 h-0.5 bg-gray-100 rounded"></span>
        <span class="block w-6 h-0.5 bg-gray-100 rounded"></span>
      </button>
    </div>
    <!-- Mobile menu overlay -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center pt-8 bg-neutral-900 md:hidden">
        <div class="w-full max-w-xs mx-auto bg-neutral-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-6 max-h-[90vh] overflow-y-auto">
          <button class="self-end mb-2" @click="closeMenu" aria-label="Close menu">
            <svg class="w-7 h-7 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <ul class="flex flex-col gap-4 text-xl font-bold uppercase tracking-wide items-center w-full">
            <li v-for="item in listItems" :key="item.title" class="w-full">
              <a
                :href="item.to"
                @click="closeMenu"
                class="block w-full text-center px-4 py-2 text-gray-100 hover:text-primary transition-colors duration-200 font-sans rounded-lg"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.font-sans {
  font-family: 'Inter', Arial, sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
