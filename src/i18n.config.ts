import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnTranslation from "./Translation/en.json";

const resources = {
  en: {
    translation: EnTranslation,
  },
};

/**
 * Default configuration
 * This one does not auto-detect language
 */
i18n.use(initReactI18next).init({
  lng: "en",
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
