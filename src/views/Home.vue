<script setup lang="ts">
import { ref } from 'vue'
import Tools from '../components/Tools.vue'
import Contact from '../components/Contact.vue'
import CvPage from '../components/CvPage.vue'
import Projects from '../components/Projects.vue'
import UiProjects from '../components/UiProjects.vue'
import Info from "../components/Info.vue"
import Main from "../components/Main.vue"

</script>

<template>
  <v-container fluid>
    <div class="part-height">
      <Main />
    </div>
    <div id="about" class="part-height">
      <Info />
    </div>
    <div id="cv" class="part-height">
      <CvPage />
    </div>
    <div id="tools" class="part-height">
      <Tools />
    </div>
    <div id="page-projects" class="part-height">
      <Projects />
    </div>
    <div id="ui-projects" class="part-height">
      <UiProjects />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <v-footer
      color="background"
      class="d-flex justify-end mr-5"
    >
      <p>Made with </p><p class="heart mx-3"> &#10084; </p> <p> by <a href="https://brzeczkowskaw.netlify.app/#/" target="_blank">Weronika Brzeczkowska-Kuzianik</a></p>
    </v-footer>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Mallanna&family=Squada+One&display=swap');

p {
  font-family: "GFS Didot"
}
.part-height {
  min-height: 100vh;
  padding-top: 20px;
}
a {
  color: white;
  text-decoration: none;
}

</style>
