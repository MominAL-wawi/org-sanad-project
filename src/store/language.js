import { reactive, computed } from "vue";

const state = reactive({
  currentLanguage: localStorage.getItem("language") || "en",
});

export function useLanguageStore() {
  const currentLanguage = computed(() => state.currentLanguage);
  const isArabic = computed(() => state.currentLanguage === "ar");

  const setLanguage = (lang) => {
    state.currentLanguage = lang;
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  const toggleLanguage = () => {
    setLanguage(state.currentLanguage === "ar" ? "en" : "ar");
  };

  return {
    currentLanguage,
    isArabic,
    setLanguage,
    toggleLanguage,
  };
}
