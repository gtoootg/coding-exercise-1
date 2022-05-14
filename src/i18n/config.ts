import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from "./en/common.json";
import common_de from "./de/common.json";

const resources = {
    de: {
      translation: common_de
    },
    en: {
      translation: common_en
    }
  };

  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;