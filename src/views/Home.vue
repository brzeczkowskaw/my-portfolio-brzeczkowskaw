<script setup lang="ts">
import { ref } from 'vue'
import Tools from '../components/Tools.vue'

</script>

<template>
  <v-container fluid>
    <div class="part-height">info</div>
    <div id="tools" class="part-height">
      <Tools />
    </div>
    <div id="page-projects" class="part-height">projects</div>
    <div id="ui-projects" class="part-height">ui projects</div>
    <div id="contact" class="part-height">contact</div>
  </v-container>
</template>

<style scoped>
.part-height {
  height: 100vh;
  padding-top: 20px;
}
</style>
