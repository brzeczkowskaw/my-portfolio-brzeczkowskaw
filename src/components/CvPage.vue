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

const tab = ref('education')

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
  <section class="w-full px-4 py-12 sm:py-20 max-w-6xl mx-auto pt-32 mt-5">
    <div class="flex flex-col md:flex-row items-stretch justify-center gap-8">
      <!-- Tabs (left column) -->
      <div class="flex flex-col gap-2 md:gap-4 w-full md:w-64 mb-4 md:mb-0 z-10">
        <button
          v-for="t in [
            { key: 'education', label: 'Education', icon: '🎓' },
            { key: 'experience', label: 'Experience', icon: '💼' },
            { key: 'certificates', label: 'Certificates', icon: '📜' },
            { key: 'volunteering', label: 'Volunteering', icon: '🤝' },
            { key: 'languages', label: 'Languages', icon: '🌍' }
          ]"
          :key="t.key"
          @click="tab = t.key"
          :class="[
            'flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors w-full md:w-full',
            tab === t.key ? 'bg-primary text-neutral-900 shadow' : 'bg-neutral-800 text-gray-200 hover:bg-neutral-700'
          ]"
          style="min-width: 120px;"
        >
          <span class="text-xl">{{ t.icon }}</span>
          <span>{{ t.label }}</span>
        </button>
      </div>
      <!-- Content Card (right column) -->
      <div class="flex-1 w-full bg-neutral-900 rounded-xl shadow p-6 md:p-8 h-[80vh] overflow-y-auto">
        <!-- Education -->
        <div v-if="tab === 'education'">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>🎓</span> Education</h2>
          <div v-for="(item, index) in education" :key="index" class="rounded-lg border border-neutral-800 p-4 mb-4 flex flex-col md:flex-row gap-4 bg-neutral-900">
            <img :src="`./assets/${item.logo}.jpg`" alt="logo" class="w-20 h-20 object-contain rounded-lg bg-neutral-800" />
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-1">{{ item.school }}</h3>
              <div class="text-gray-400 mb-2">{{ item.location }} &mdash; {{ item.time }} &mdash; {{ item.degree }}</div>
              <div class="text-gray-300 mb-2">Subject: {{ item.subject }}</div>
              <div class="text-gray-400 text-sm">{{ item.comments }}</div>
            </div>
          </div>
        </div>
        <!-- Experience -->
        <div v-if="tab === 'experience'">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>💼</span> Experience</h2>
          <div v-for="(item, index) in experience" :key="index" class="rounded-lg border border-neutral-800 p-4 mb-4 flex flex-col md:flex-row gap-4 bg-neutral-900">
            <img :src="`./assets/${item.logo}.jpg`" alt="logo" class="w-20 h-20 object-contain rounded-lg bg-neutral-800" />
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-1">{{ item.company }}</h3>
              <div class="text-gray-400 mb-2">{{ item.title }}</div>
              <div class="text-gray-400 mb-2">{{ formatDate(item.start) }} - {{ formatDate(item.end) }} <span class="ml-2 text-xs text-gray-500">({{ getDifference(item.start, item.end) }})</span></div>
              <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li v-for="text in item.work" :key="text">{{ text }}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Certificates -->
        <div v-if="tab === 'certificates'">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>📜</span> Certificates</h2>
          <div v-for="(item, index) in certificates" :key="index" class="rounded-lg border border-neutral-800 p-4 mb-4 flex flex-col gap-2 bg-neutral-900">
            <h3 class="text-lg font-bold">{{ item.name }}</h3>
            <div class="text-gray-400">Issued by {{ item.from }} &mdash; {{ formatDate(item.issued) }}</div>
            <a :href="item.link" target="_blank" class="text-primary underline hover:text-primary/80">see certificate</a>
          </div>
        </div>
        <!-- Volunteering -->
        <div v-if="tab === 'volunteering'">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>🤝</span> Volunteering</h2>
          <div v-for="(item, index) in volunteering" :key="index" class="rounded-lg border border-neutral-800 p-4 mb-4 flex flex-col gap-2 bg-neutral-900">
            <h3 class="text-lg font-bold">{{ item.company }}</h3>
            <div class="text-gray-400">{{ item.location }} &mdash; {{ formatDate(item.start) }} - {{ formatDate(item.end) }} <span class="ml-2 text-xs text-gray-500">({{ getDifference(item.start, item.end) }})</span></div>
            <div class="text-gray-300 font-semibold">{{ item.role }}</div>
            <div class="text-gray-400 text-sm">{{ item.text }}</div>
          </div>
        </div>
        <!-- Languages -->
        <div v-if="tab === 'languages'">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2"><span>🌍</span> Languages</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(item, index) in languages" :key="index" class="rounded-lg border border-neutral-800 p-4 flex flex-col gap-1 bg-neutral-900">
              <div class="flex items-center gap-2">
                <img :src="findFlagUrlByCountryName(item.country)" :alt="`${item.country} flag`" class="w-6 h-4 object-cover rounded-sm" />
                <span class="font-bold">{{ item.language }}</span>
              </div>
              <div class="text-gray-400 text-sm">{{ item.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@400;700&display=swap');
.font-sans {
  font-family: 'Saira Semi Condensed', Arial, sans-serif;
}

/* Custom scrollbar styling */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #171717; /* neutral-900 */
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #404040; /* neutral-700 */
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #525252; /* neutral-600 */
}

/* Firefox scrollbar */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #404040 #171717;
}
</style>
