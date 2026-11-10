import { en } from "../locales/en.js";
import { fr } from "../locales/fr.js";
import { de } from "../locales/de.js";
import { es } from "../locales/es.js";

const translations = {
  en,
  fr,
  de,
  es
};

const storedLanguage = localStorage.getItem("language");

let currentLanguage = translations[storedLanguage]
  ? storedLanguage
  : "en";

export function setLanguage(language) {
  if (translations[language]) {
    currentLanguage = language;
    localStorage.setItem("language", language);
  }
}

export function getLanguage() {
  return currentLanguage;
}

export function t(key) {
  const parts = key.split(".");
  let value = translations[currentLanguage];

  for (const part of parts) {
    value = value?.[part];
  }

  return value ?? key;
}