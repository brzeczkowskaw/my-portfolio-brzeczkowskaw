<script setup lang="ts">
import { projects } from '../variables/projects'

</script>

<template>
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-32 mt-5">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <span class="text-primary">⭐</span>
      My Projects
    </h2>
    
    <div class="space-y-8">
      <div 
        v-for="(item, index) in projects" 
        :key="index"
        class="bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Project Info -->
          <div class="space-y-4">
            <div>
              <p class="text-primary font-medium mb-2">Project</p>
              <h3 class="text-2xl font-bold text-white mb-4">{{ item.name }}</h3>
            </div>
            
            <div class="bg-neutral-900 rounded-lg p-6 shadow-inner">
              <p class="text-neutral-300 leading-relaxed mb-4">
                {{ item.text }}
              </p>
              
              <div v-if="item.subtext" class="space-y-3">
                <p class="text-neutral-300 font-medium">{{ item.subtext }}</p>
                <ul class="space-y-2">
                  <li 
                    v-for="point in item.points" 
                    :key="point" 
                    class="flex items-start gap-2 text-neutral-300"
                  >
                    <span class="text-primary mt-1">•</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Project Image and Links -->
          <div class="space-y-4">
            <div class="relative">
              <img 
                :src="`./assets/${item.photos[0]}.jpg`"
                :alt="item.name"
                class="w-full h-64 object-cover rounded-lg border-2 border-primary shadow-lg shadow-primary/20"
              />
            </div>
            
            <!-- Tools -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tool in item.tools" 
                :key="tool"
                class="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full border border-neutral-700 hover:border-primary transition-colors"
              >
                {{ tool.toUpperCase() }}
              </span>
            </div>
            
            <!-- Links -->
            <div class="flex justify-end gap-4 pt-2">
              <a 
                :href="item.github" 
                target="_blank"
                class="p-3 bg-neutral-800 rounded-lg hover:bg-primary hover:text-neutral-900 transition-all duration-300 group"
              >
                <v-icon icon="mdi-github" size="large" class="group-hover:scale-110 transition-transform"></v-icon>
              </a>
              <a 
                :href="item.demo" 
                target="_blank"
                class="p-3 bg-neutral-800 rounded-lg hover:bg-primary hover:text-neutral-900 transition-all duration-300 group"
              >
                <v-icon icon="mdi-web" size="large" class="group-hover:scale-110 transition-transform"></v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p, h2, h3 {
  font-family: "Saira Semi Condensed"
}
.picture {
  border: 1px solid rgb(var(--v-theme-secondary));
  box-shadow: 0 0 10px rgb(var(--v-theme-primary));
  margin-top: 3em;
}
.link-icon {
  color: rgb(var(--v-theme-primary));
  margin-left: 1.8em;
}
.link-icon:hover {
  color: rgb(var(--v-theme-secondary));
}
.chip-class {
  background: rgb(var(--v-theme-background));
  font-family: "Special Elite"
}
</style>
