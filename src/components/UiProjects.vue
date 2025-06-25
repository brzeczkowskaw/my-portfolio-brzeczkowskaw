<script setup lang="ts">
import { uiProjects } from '../variables/uiProjects'

</script>

<template>
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-32 mt-5">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <span class="text-primary">⭐</span>
      My UI Projects
    </h2>
    
    <div class="space-y-8">
      <div 
        v-for="(item, index) in uiProjects" 
        :key="index"
        class="bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Project Info -->
          <div class="space-y-4 order-2 lg:order-1">
            <div>
              <p class="text-primary font-medium mb-2">Project</p>
              <h3 class="text-2xl font-bold text-white mb-4">{{ item.name }}</h3>
            </div>
            
            <div class="bg-neutral-900 rounded-lg p-6 shadow-inner">
              <p class="text-neutral-300 leading-relaxed text-lg">
                {{ item.text }}
              </p>
            </div>
            
            <!-- Links -->
            <div class="flex justify-end gap-4 pt-4">
              <a 
                :href="item.link" 
                target="_blank"
                class="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-primary hover:text-neutral-900 transition-all duration-300 border border-neutral-700 hover:border-primary flex items-center justify-center"
              >
                {{ item.tool.toUpperCase() }}
              </a>
              <a 
                :href="item.pdf" 
                target="_blank"
                class="p-2 bg-neutral-800 rounded-lg hover:bg-primary hover:text-neutral-900 transition-all duration-300 group flex items-center justify-center"
              >
                <v-icon icon="mdi-file-pdf-box" size="large" class="group-hover:scale-110 transition-transform"></v-icon>
              </a>
            </div>
          </div>
          
          <!-- Project Image -->
          <div class="flex justify-center items-center order-1 lg:order-2">
            <div class="relative">
              <img 
                :src="`./assets/${item.photo}.jpg`"
                :alt="item.name"
                class="w-32 h-64 object-cover rounded-lg border-2 border-primary shadow-lg shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p, h2, h3, h1 {
  font-family: "Saira Semi Condensed"
}
p {
  font-size: 1.1rem;
}
.picture {
  border: 1px solid rgb(var(--v-theme-secondary));
  box-shadow: 0 0 10px rgb(var(--v-theme-primary));
  margin-top: 3em;
  height: 200px;
  width: 100px;
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
