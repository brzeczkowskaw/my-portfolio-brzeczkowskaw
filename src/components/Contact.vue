<script setup lang="ts">
import { contacts } from '../variables/contact'

</script>

<template>
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-20 relative">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <span class="text-primary">⭐</span>
      Let's get in touch!
    </h2>
    
    <!-- Social Media Icons -->
    <div class="py-12 sm:py-20">
      <!-- First Row -->
      <div class="flex justify-center mb-8">
        <div class="flex gap-6">
          <a 
            v-for="contact in contacts.slice(0, 3)" 
            :key="contact.address"
            :href="contact.address" 
            target="_blank"
            class="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-800 rounded-full flex items-center justify-center text-3xl text-neutral-300 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-primary rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-500"></div>
            <v-icon :icon="contact.icon" class="relative z-10 group-hover:scale-110 transition-transform duration-300"></v-icon>
          </a>
        </div>
      </div>
      
      <!-- Second Row -->
      <div class="flex justify-center">
        <div class="flex gap-6">
          <a 
            v-for="contact in contacts.slice(3, 6)" 
            :key="contact.address"
            :href="contact.address" 
            target="_blank"
            class="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-800 rounded-full flex items-center justify-center text-3xl text-neutral-300 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-primary rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-500"></div>
            <v-icon :icon="contact.icon" class="relative z-10 group-hover:scale-110 transition-transform duration-300"></v-icon>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Contact Information - Bottom of Component -->
    <div class="absolute bottom-0 sm:bottom-4 right-4 space-y-1 text-right">
      <div class="flex justify-end items-center gap-2">
        <v-icon icon="mdi-at" size="small" class="text-primary"></v-icon>
        <span class="text-neutral-300 text-sm">Email:</span>
        <span class="text-white text-sm">brzeczkowska.w@gmail.com</span>
      </div>
      
      <div class="flex justify-end items-center gap-2">
        <v-icon icon="mdi-phone" size="small" class="text-primary"></v-icon>
        <span class="text-neutral-300 text-sm">Phone:</span>
        <span class="text-white text-sm">+31 617278642</span>
      </div>
      
      <div class="flex justify-end items-center gap-2">
        <v-icon icon="mdi-map-marker" size="small" class="text-primary"></v-icon>
        <span class="text-neutral-300 text-sm">Location:</span>
        <span class="text-white text-sm">Utrecht</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-list {
  padding-top: 20vh;
  padding-bottom: 20vh;
}
p, h2, h3 {
  font-family: "Saira Semi Condensed"
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
ul li {
  list-style: none;
  margin: 0 15px;
}
ul li a {
  display: block;
  width: 90px;
  height: 90px;
  text-align: center;
  line-height: 85px;
  background: rgb(var(--v-theme-tertiary));
  border-radius: 50%;
  font-size: 30px;
  color: rgb(var(--v-theme-secondary));
  transition: .9s;
}
@media(max-width: 480px) {
  ul li a  {
    width: 60px;
    height: 60px;
    line-height: 55px;
  }
  .contact-list {
    padding-top: 30vh;
    padding-bottom: 30vh;
  }
}
ul li a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}
ul li a:hover {
  color: rgb(var(--v-theme-primary));
  box-shadow: 0 0 9px rgb(var(--v-theme-primary));
  text-shadow: 0 0 9px rgb(var(--v-theme-primary));
}
</style>
