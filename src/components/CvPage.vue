<script setup lang="ts">
import { ref } from 'vue'
import { 
  education, 
  experience, 
  volunteering, 
  languages,
  certificates
} from '../variables/experience'
import { findFlagUrlByCountryName } from "country-flags-svg";

const tab = ref();

function getDifference(startDate: any, endDate: any) {
  const start = new Date(startDate) as any;
  const end = endDate ? new Date(endDate) : new Date() as any;

  const timeDifference = end - start;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(timeDifference / millisecondsInYear);
  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.4375;
  const months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth);
  return years + " yrs, " + months + " mths";
}

function formatDate(date: string | null) {
  if (!date) return 'Present';
  const fullDate = new Date(date);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const fullMonthName = monthNames[fullDate.getMonth()];
  const fullYear = fullDate.getFullYear();
  return `${fullMonthName} ${fullYear}`;
}

</script>

<template>
  <v-container fluid class="mt-7">
    <h2 class="d-flex align-center">
      <v-icon size="small" color="secondary" class="mr-5">
        mdi-star-outline
      </v-icon>
      My experience
      <hr class="ml-4" style="width: 60%" size="1" />  
    </h2>
    <v-card 
      class="py-4 px-0 mx-5 my-10" 
      color="background"
      elevation="0"
    >
      <v-row>
        <v-col cols="12" sm="4">
          <v-tabs
            v-model="tab"
            color="primary"
            direction="vertical"
          >
            <v-tab value="education">
              <v-icon start>
                mdi-school
              </v-icon>
              Education
            </v-tab>
            <v-tab value="experience">
              <v-icon start>
                mdi-briefcase
              </v-icon>
              Experience
            </v-tab>
            <v-tab value="certificates">
              <v-icon start>
                mdi-file-certificate
              </v-icon>
              Certificates
            </v-tab>
            <v-tab value="volunteering">
              <v-icon start>
                mdi-hand-heart
              </v-icon>
              Volunteering
            </v-tab>
            <v-tab value="languages">
              <v-icon start>
                mdi-translate-variant
              </v-icon>
              Languages
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col class="px-0">
          <v-window v-model="tab" class="experience-card">
            <v-window-item value="education">
              <v-card 
                v-for="(item, index) in education" 
                :key="index"
                color="background"
                elevation="0"
                class="ma-0 pa-0"
                width="auto"
              >
                <v-card-title>
                  {{ item.school }}
                </v-card-title>
                <v-row>
                  <v-col 
                    cols="3" 
                    class="ma-0 pa-6"
                  >
                    <v-img 
                      :src="`public/assets/${item.logo}.jpg`" 
                      class="logo"
                    />
                  </v-col>
                  <v-col class="ma-0 py-3 px-2">
                    <v-card-subtitle>
                      {{ item.location }}<br />
                      {{ item.time }} - {{ item.degree }}
                    </v-card-subtitle>
                    <v-card-text class="mb-4">
                      Subject: {{ item.subject }}<br />
                      {{ item.comments }}
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
            <v-window-item value="experience">
              <v-card
                v-for="(item, index) in experience" 
                :key="index"
                color="background"
                elevation="0"
                class="ma-0 pa-0"
                width="auto"
              >
                <v-row>
                  <v-col
                    cols="3" 
                    class="ma-0 pa-6"
                  >
                    <v-img 
                      :src="`public/assets/${item.logo}.jpg`" 
                      class="logo"
                    />
                  </v-col>
                  <v-col>
                    <v-card-title>
                      {{ item.company }}
                    </v-card-title>
                    <v-card-subtitle>
                      {{ item.title }}<br />
                      {{ formatDate(item.start) }} - {{ formatDate(item.end) }}
                      <v-icon size="x-small">
                        mdi-circle-small
                      </v-icon>
                      {{ getDifference(item.start, item.end) }}
                    </v-card-subtitle>
                  </v-col>
                </v-row>
                <v-row class="mb-3">
                  <v-card-text>
                    <ul>
                      <li v-for="text in item.work" :key="text">
                        <v-icon size="x-small">
                          mdi-circle-small
                        </v-icon>
                        {{text}}
                      </li>
                    </ul>
                  </v-card-text>
                </v-row>
              </v-card>
            </v-window-item>
            <v-window-item value="certificates">
              <v-card
                v-for="(item, index) in certificates" 
                :key="index"
                color="background"
                elevation="0"
                class="ma-0 pa-0"
                width="auto"
              >
                <v-card-title>
                  {{ item.name }}
                </v-card-title>
                <v-card-subtitle>
                  Issued by {{ item.from }} <br />
                  {{ formatDate(item.issued) }}
                </v-card-subtitle>
                <v-card-text class="mb-4">
                  <a class="certificate-link" :href="item.link" target="_blank">
                    see certificate
                  </a>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="volunteering">
              <v-card
                v-for="(item, index) in volunteering" 
                :key="index"
                color="background"
                elevation="0"
                class="ma-0 pa-0"
                width="auto"
              >
                <v-card-title>
                  {{ item.company }}
                </v-card-title>
                <v-card-subtitle>
                  <b>{{ item.role }}</b><br />
                  {{ item.location }} / 
                  {{ formatDate(item.start) }} - {{ formatDate(item.end) }}
                </v-card-subtitle>
                <v-card-text class="mb-4">
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="languages">
              <v-card
                v-for="(item, index) in languages" 
                :key="index"
                color="background"
                elevation="0"
                class="ma-0 pa-0"
                width="auto"
              >
                <v-row class="mb-3">
                  <v-col cols="3">
                    <v-img class="language" :src="findFlagUrlByCountryName(item.country)" />
                  </v-col>
                  <v-col>
                    <h2>{{ item.language }}</h2>
                    <small>{{ item.level }}</small>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mallanna&family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Mallanna&family=Squada+One&display=swap');

h2 {
  font-family: "Mallana"
}
p {
  font-family: "GFS Didot"
}
.v-card-title {
  font-family: "Mallana";
  font-size: 1.1em;
  line-height: 1.2em;
}
.v-card-subtitle {
  font-family: "GFS Didot";
  font-size: 0.8em;
}
.v-card-text {
  font-family: "GFS Didot";
}
.experience-card {
  max-height: 65vh;
  overflow-y: auto;
  scrollbar-width: 2px;
  scrollbar-color: rgb(var(--v-theme-secondary)) rgb(var(--v-theme-tertiary));
}
.logo {
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
}
.language {
  border-radius: 50%;
  margin: 9px;
  width: 50%;
  box-shadow: 0 0 9px rgb(var(--v-theme-primary));
}
.certificate-link {
  text-decoration: none;
  color: rgb(var(--v-theme-secondary));
  font-size: 1.3em;
}
</style>
