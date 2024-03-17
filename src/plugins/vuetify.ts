import "vuetify/styles";
import * as components from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import { fa } from "vuetify/iconsets/fa";

const defaultTheme = {
  colors: {
    primary: "#ccff33",
    secondary: "#38b000",
    tertiary: "#007200",
    background: "#004b23",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "default",
    themes: {
      default: defaultTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      fa,
    },
  },
});
