"use client";

import { ref, computed } from "vue";

const currentLanguage = ref("en");
let initialized = false;

export function useLanguage() {
  if (!initialized && typeof window !== "undefined") {
    const savedLang = localStorage.getItem("language") || "en";
    currentLanguage.value = savedLang;
    document.documentElement.setAttribute("lang", savedLang);
    document.documentElement.setAttribute(
      "dir",
      savedLang === "ar" ? "rtl" : "ltr"
    );
    initialized = true;
  }

  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute(
        "dir",
        lang === "ar" ? "rtl" : "ltr"
      );
    }
  };

  const isArabic = computed(() => currentLanguage.value === "ar");
  const isEnglish = computed(() => currentLanguage.value === "en");

  return {
    currentLanguage,
    setLanguage,
    isArabic,
    isEnglish,
  };
}
