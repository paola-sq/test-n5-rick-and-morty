// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang from "./index";

const resources = {
  en: {
    translation: {
      greeting: "Hello, world!",
    },
  },
  es: {
    translation: {
      greeting: "¡Hola, mundo!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources: lang,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
