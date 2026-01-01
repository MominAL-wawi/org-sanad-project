<template>
  <div>
    <AppHeader />

    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h1 class="hero-title">
              {{ t.hero.title }}
              <span class="hero-subtitle d-block">{{ t.hero.subtitle }}</span>
            </h1>
            <p class="hero-description">
              {{
                isArabic
                  ? "نسعى لحشد الطاقات الشعبية والمدنية لدعم المجالات الإغاثية والتنموية والإرشادية والتعليمية في غزة"
                  : "We strive to mobilize popular and civil energies to support relief, development, guidance and educational fields in Gaza"
              }}
            </p>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/donate" class="btn btn-primary btn-lg">{{
                t.hero.donateBtn
              }}</router-link>
              <router-link to="/about" class="btn btn-outline-primary btn-lg">{{
                t.hero.learnMore
              }}</router-link>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <img
              src="image/logo.png"
              alt="الهيئة الإنسانية - سند"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="row text-center">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="col-6 col-md-3 mb-4 mb-md-0"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          {{ t.values.sectionTitle }}
        </h2>
        <p class="section-description" data-aos="fade-up" data-aos-delay="100">
          {{ t.values.sectionDescription }}
        </p>
        <div class="row g-4">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            class="col-md-6 col-lg-3"
          >
            <div
              class="card text-center h-100 card-hover-lift"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="card-body">
                <div class="icon-wrapper primary icon-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h5 class="card-title fw-bold">{{ value.title }}</h5>
                <p class="card-text text-muted leading-relaxed">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-gradient-primary text-white"
      style="margin-bottom: 0; padding-bottom: 4rem"
    >
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
          {{ isArabic ? "كن جزءاً من التغيير" : "Be Part of the Change" }}
        </h2>
        <p class="lead mb-4" data-aos="fade-up" data-aos-delay="100">
          {{
            isArabic
              ? "ساهم في إحداث فرق حقيقي في حياة الأسر المتضررة في غزة"
              : "Contribute to making a real difference in the lives of affected families in Gaza"
          }}
        </p>
        <div
          class="d-flex flex-wrap gap-3 justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <router-link to="/donate" class="btn btn-light btn-lg">{{
            t.hero.donateBtn
          }}</router-link>
          <a
            href="https://wa.me/970567225829"
            target="_blank"
            class="btn btn-outline-light btn-lg"
            >{{ isArabic ? "تواصل عبر واتساب" : "Contact via WhatsApp" }}</a
          >
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";
import AOS from "aos";
import "aos/dist/aos.css";

const { currentLanguage, isArabic } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });
});

const stats = computed(() => [
  { number: "50+", label: t.value.stats.sponsoredChildren },
  { number: "8", label: t.value.stats.activeProjects },
  { number: "1000+", label: t.value.stats.beneficiaryFamilies },
  { number: "24/7", label: t.value.stats.quickResponse },
]);

const values = computed(() => [
  {
    title: t.value.values.transparency.title,
    description: t.value.values.transparency.description,
  },
  {
    title: t.value.values.justice.title,
    description: t.value.values.justice.description,
  },
  {
    title: t.value.values.sincerity.title,
    description: t.value.values.sincerity.description,
  },
  {
    title: t.value.values.responsibility.title,
    description: t.value.values.responsibility.description,
  },
]);
</script>

<style scoped>
.icon-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.card-hover-lift:hover {
  transform: translateY(-10px);
  transition: transform 0.3s ease-in-out;
}
</style>
