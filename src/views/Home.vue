<script setup lang="ts">
import Tools from '../components/Tools.vue'
import Contact from '../components/Contact.vue'
import CvPage from '../components/CvPage.vue'
import Projects from '../components/Projects.vue'
import UiProjects from '../components/UiProjects.vue'
import Info from "../components/Info.vue"
import Main from "../components/Main.vue"
</script>

<template>
  <div class="flex flex-col gap-0">
    <section>
      <Main />
    </section>
    <section id="about">
      <Info />
    </section>
    <section id="cv">
      <CvPage />
    </section>
    <section id="tools">
      <Tools />
    </section>
    <section id="page-projects">
      <Projects />
    </section>
    <section id="ui-projects">
      <UiProjects />
    </section>
    <section id="contact" class="py-16 flex items-center justify-center">
      <Contact />
    </section>
    <footer class="w-full flex justify-end items-center gap-2 px-6 py-4 bg-transparent text-sm text-gray-500 dark:text-gray-400">
      <span>Made with</span>
      <span class="heart mx-1 text-red-500">&#10084;</span>
      <span>by <a href="https://weronikabrzeczkowska.netlify.app/#/" target="_blank" class="underline hover:text-primary">Weronika</a></span>
    </footer>
  </div>
</template>

<style scoped>
.heart {
  animation: pulse 1.2s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
</style>
