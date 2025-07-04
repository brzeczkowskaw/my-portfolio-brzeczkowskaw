import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import VueScrollTo from "vue-scrollto";
import "./assets/main.css";

const pinia = createPinia();

if (import.meta.env.DEV) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (window as any).__pinia__ = pinia.state.value;
  (window as any).__get__ = (obj: Record<string, unknown>) =>
    JSON.parse(JSON.stringify(obj));
  /* eslint-enable */
}

const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(VueScrollTo);

app.mount("#app");
