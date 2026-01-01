<template>
  <div>
    <AppHeader />

    <!-- Added translations for hero section -->
    <section class="hero-section animate-fade-in">
      <div class="container text-center">
        <h1 class="hero-title animate-slide-up">{{ t.about.heroTitle }}</h1>
        <p class="hero-description animate-slide-up-delay">
          {{ t.about.heroSubtitle }}
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="card animate-slide-up card-hover-lift">
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-primary">
                  {{ t.about.sectionTitle }}
                </h2>
                <p class="lead mb-4 leading-relaxed">
                  {{ t.about.paragraph1 }}
                </p>
                <p class="lead leading-relaxed">
                  {{ t.about.paragraph2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-muted" style="margin-bottom: 0; padding-bottom: 4rem">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6 animate-slide-right">
            <div class="card h-100 card-hover-lift">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-wrapper primary me-3 icon-pulse">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 class="h4 fw-bold mb-0 text-primary">
                    {{ t.about.vision }}
                  </h3>
                </div>
                <p class="leading-relaxed">
                  {{ t.about.visionText }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 animate-slide-left">
            <div class="card h-100 card-hover-lift">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-wrapper secondary me-3 icon-pulse">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="h4 fw-bold mb-0 text-secondary">
                    {{ t.about.mission }}
                  </h3>
                </div>
                <p class="leading-relaxed">
                  {{ t.about.missionText }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { computed } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { useLanguageStore } from "../store/language";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { translations } from "../i18n/translations";

// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const { currentLanguage } = useLanguageStore();
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const t = computed(() => translations[currentLanguage.value]);
</script>
