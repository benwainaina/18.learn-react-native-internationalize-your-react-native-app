import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/i18n/en.json";
import ar from "../assets/i18n/ar.json";
import es from "../assets/i18n/es.json";
import "intl-pluralrules";

const resources = { en, ar, es };

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
