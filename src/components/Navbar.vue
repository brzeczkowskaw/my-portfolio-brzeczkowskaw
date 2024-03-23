<script setup lang="ts">
import { computed, ref } from 'vue'

const isSidebarOpen = ref(false);
const isScreenBig = computed(() => {
  return window.screen.availWidth > 750;
})

const listItems = [
  {
    title: 'About',
    props: {
      to: '#about',
    },
  },
  {
    title: 'CV',
    props: {
      to: '#cv',
    },
  },
  {
    title: 'Tools',
    props: {
      to: '#tools',
    },
  },
  {
    title: 'Projects',
    props: {
      to: '#page-projects',
    },
  },
  {
    title: 'UI projects',
    props: {
      to: '#ui-projects',
    },
  },
  {
    title: 'Contact',
    props: {
      to: '#contact',
    },
  },
]
</script>

<template>
  <v-container fluid>
    {{ isScreenBig }}
    <v-app-bar v-if="isScreenBig" color="background" elevation="0">
      <v-spacer />
      <div>
        <ul class="nav">
          <li v-for="item in listItems" :key="item.title">
            <a :href="item.props.to">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </v-app-bar>
    <v-app-bar 
      v-else 
      prominent 
      density="compact" 
      color="background"
      elevation="0"
    >
      <v-app-bar-nav-icon @click="isSidebarOpen = !isSidebarOpen"/>
    </v-app-bar>
    <v-navigation-drawer
      v-model="isSidebarOpen" 
      floating
      color="background"
      width="100%"
      class="nav-side-bar"
    >
      <ul class="nav">
        <li v-for="item in listItems" :key="item.title" @click="isSidebarOpen = !isSidebarOpen" >
          <a :href="item.props.to">{{ item.title }}</a>
        </li>
      </ul>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600');

:deep(.drawer-items .v-list-item-title) {
  font-size: 0.9rem;
  font-weight: bold;
}
.nav {
  font-family: 'Titillium Web';
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
}
.nav * {
  box-sizing: border-box;
  transition: all .35s ease;
}
.nav li {
  display: inline-block;
  list-style: outside none none;
  margin: .5em 1em;
  padding: 0;
}
.nav a {
  padding: .5em .4em;
  color: rgb(var(--v-theme-primary));
  position: relative;
  text-decoration: none;
  font-size: 20px;
}
.nav a::before,
.nav a::after {
  content: '';
  height: 13px;
  width: 19px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}
.nav a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #3E8914;
  border-right: 3px solid #2E640F;
  transform: translate(-100%, 50%);
}
.nav a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #2E640F;
  border-left: 3px solid #3E8914;
  transform: translate(100%, -50%)
}
.nav a:hover:before,
.nav a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
.nav a:hover {
  color: rgb(var(--v-theme-secondary));
}
@media(max-width: 750px) {
  .nav-side-bar {
    width: 100%;
  }
}
</style>
