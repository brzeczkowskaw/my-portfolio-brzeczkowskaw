<script setup lang="ts">
import { tools } from '../variables/tools'

</script>

<template>
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-32 mt-5">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <span class="text-primary">⭐</span>
      Tools & Technologies
    </h2>
    
    <div class="bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <div 
          v-for="tool in tools" 
          :key="tool.name"
          class="bg-neutral-800 rounded-lg p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-primary hover:text-neutral-900 hover:scale-105 hover:shadow-lg cursor-pointer group"
        >
          <div class="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <v-icon :icon="tool.icon" size="x-large"></v-icon>
          </div>
          <span class="text-sm font-medium text-center">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>