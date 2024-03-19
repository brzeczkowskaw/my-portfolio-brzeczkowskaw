<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <v-container fluid>
    <v-app-bar color="background" elevation="0">
      <v-spacer />
      <div>
        <ul class="nav">
          <li><a href="#">About</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#page-projects">Projects</a></li>
          <li><a href="#ui-projects">UI projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </v-app-bar>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600');

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
</style>
