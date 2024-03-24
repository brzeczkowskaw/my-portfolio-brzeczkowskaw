<script setup lang="ts">
import { contacts } from '../variables/contact'

</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      Let's get in touch!
    </h2>
    <div class="contact-list">
      <div class="d-flex justify-center">
        <ul>
          <li v-for="contact in contacts.slice(0, 3)" :key="contact.address">
            <a :href="contact.address" target="_blank">
              <v-icon>{{ contact.icon }}</v-icon>
            </a>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-center">
        <ul>
          <li v-for="contact in contacts.slice(3, 6)" :key="contact.address">
            <a :href="contact.address" target="_blank">
              <v-icon>{{ contact.icon }}</v-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="d-flex justify-end mr-5">
        <v-icon class="mr-2" size="small" color="primary">mdi-at</v-icon><p class="mr-2">Email: </p>brzeczkowska.w@gmail.com
      </div>
      <div class="d-flex justify-end mr-5">
        <v-icon class="mr-2" size="small" color="primary">mdi-phone</v-icon><p class="mr-2">Phone number: </p>+31 617278642
      </div>
      <div class="d-flex justify-end mr-5">
        <v-icon class="mr-2" size="small" color="primary">mdi-map-marker</v-icon><p class="mr-2">Location: </p>Utrecht
      </div>
    </div>
  </v-container>
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
