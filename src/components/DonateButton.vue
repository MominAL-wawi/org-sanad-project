<template>
  <!-- Updated to support bilingual text -->
  <router-link to="/donate" class="donate-float">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="28"
      height="28"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="donate-text">{{ isArabic ? "تبرع" : "Donate" }}</span>
  </router-link>
</template>

<script setup>
import { useLanguageStore } from "../store/language";

const languageStore = useLanguageStore();
const isArabic = languageStore.isArabic;
</script>
