<script setup lang="ts">
import { projects } from '../variables/projects'

</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      My projects
    </h2>
    <v-card
      v-for="(item, index) in projects" 
      :key="index"
      color="background"
      elevation="0"
      class="ma-2 pa-2"
      width="70vw"
    >
      <v-row>
        <v-col>
          <p class="text-primary">Project</p>
          <h3>{{ item.name }}</h3>
          <v-card color="tertiary" class="ma-3 pa-5" width="350" elevation="6">
            <p>
              {{ item.text }}
            </p>
            <div v-if="item.subtext" class="my-2">
              <p>
                {{ item.subtext }}
              </p>
              <ul>
                <li 
                  v-for="point in item.points" 
                  :key="point" 
                  class="ml-4"
                >
                  <p>{{ point }}</p>
                </li>
              </ul>
            </div>
          </v-card>
        </v-col>
        <v-col class="my-5">
          <v-img 
            :src="`./assets/${item.photos[0]}.jpg`"
            class="picture"
          />
          <div class="mt-3">
            <v-chip 
              v-for="tool in item.tools" 
              :key="tool"
              label
              class="ma-1 pa-0 chip-class"
              density="comfortable"
            >
              {{ tool.toUpperCase() }}
            </v-chip>
          </div>
          <v-row class="my-3 mr-1" justify="end">
            <a :href="item.github" class="link-icon" target="_blank">
              <v-icon size="x-large">
                mdi-github
              </v-icon>
            </a>
            <a :href="item.demo" class="link-icon" target="_blank">
              <v-icon size="x-large">
                mdi-web
              </v-icon>
            </a>
          </v-row>
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
