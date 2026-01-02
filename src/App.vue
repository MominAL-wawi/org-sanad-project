<template>
  <div id="app">
    <!-- Added Welcome Modal -->
    <WelcomeModal />
    <router-view />
    <!-- Added scroll to top button -->
    <ScrollToTop />
    <!-- Added WhatsApp button -->
    <WhatsAppButton />
    <!-- Added fixed donate button -->
    <DonateButton />
  </div>
</template>

<script setup>
import WelcomeModal from "./components/WelcomeModal.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import DonateButton from "./components/DonateButton.vue";
</script>

<style>
@import "./assets/style.css";
</style>
