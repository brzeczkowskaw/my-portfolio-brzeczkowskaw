<script setup lang="ts">
import { uiProjects } from '../variables/uiProjects'
import { computed } from 'vue'

const isScreenBig = computed(() => {
  return window.screen.availWidth > 750;
})
</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      My UI projects
    </h2>
    <v-card
      v-for="(item, index) in uiProjects" 
      :key="index"
      color="background"
      elevation="0"
      class="ma-2 pa-2"
      width="auto"
    >
      <v-row>
        <v-col v-if="isScreenBig" class="my-5" align="center">
          <v-img 
            :src="`./assets/${item.photo}.jpg`"
            class="picture"
          />
        </v-col>
        <v-col>
          <p class="text-primary">Project</p>
          <h3>{{ item.name }}</h3>
          <v-card color="tertiary" class="ma-3 pa-5" width="350" elevation="6">
            <p>
              {{ item.text }}
            </p>
          </v-card>
          <div class="mt-3">
          </div>
          <v-row class="my-3 mr-2" justify="end">
            <a :href="item.link" class="link-icon" target="_blank">
              <v-chip 
                label
                class="ma-1 pa-0 chip-class"
                density="comfortable"
              >
                {{ item.tool.toUpperCase() }}
              </v-chip>
            </a>
            <a :href="item.pdf" class="link-icon" target="_blank">
              <v-icon size="x-large">
                mdi-file-pdf-box
              </v-icon>
            </a>
          </v-row>
        </v-col>
        <v-col v-if="!isScreenBig" class="mb-5" align="center">
          <v-img 
            :src="`./assets/${item.photo}.jpg`"
            class="picture"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
h2,
h3 {
  font-family: "Mallana"
}
p {
  font-family: "Saira Semi Condensed"
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
