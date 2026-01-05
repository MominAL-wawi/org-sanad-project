<template>
  <div>
    <AppHeader />

    <section class="hero-section animate-fade-in">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0 animate-slide-right">
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
          <div class="col-lg-6 animate-slide-left">
            <img
              src="image/logo.png"
              alt="الهيئة الإنسانية - سند"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Adding Chairman's Message Section -->
    <section class="chairman-section">
      <div class="container">
        <h2 class="section-title animate-fade-in text-center mb-5">
          {{ t.chairmanMessage.title }}
        </h2>
        <div class="row align-items-center g-5">
          <div class="col-lg-5 text-center animate-slide-right">
            <div class="chairman-image-wrapper">
              <img
                src="/image/aa.jpeg"
                alt="رئيس الهيئة - أيمن طارق أبو عيشة"
                class="chairman-image"
              />
              <div class="chairman-name-badge">
                <h4 class="mb-1">{{ t.chairmanMessage.name }}</h4>
                <p class="mb-0 text-muted">{{ t.chairmanMessage.position }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 animate-slide-left">
            <div class="chairman-message-content">
              <div class="bismillah mb-4">
                {{ t.chairmanMessage.bismillah }}
              </div>
              <div
                class="message-text"
                v-html="t.chairmanMessage.content"
              ></div>
              <div class="chairman-signature mt-4">
                <p class="fw-bold mb-1">{{ t.chairmanMessage.signature }}</p>
                <p class="text-muted">{{ t.chairmanMessage.organization }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section animate-fade-in">
      <div class="container">
        <div class="row text-center">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="col-6 col-md-3 mb-4 mb-md-0 animate-slide-up"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="section-title animate-fade-in">{{ t.about.values }}</h2>
        <p class="section-description animate-fade-in">
          {{
            isArabic
              ? "نلتزم في عملنا بمجموعة من القيم الأساسية التي توجه مسيرتنا"
              : "We are committed to a set of core values that guide our journey"
          }}
        </p>
        <div class="row g-4">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            class="col-md-6 col-lg-3"
          >
            <div
              class="card text-center h-100 card-hover-lift animate-slide-up"
              :style="`animation-delay: ${index * 0.1}s`"
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
        <h2 class="display-5 fw-bold mb-4 animate-fade-in">
          {{ isArabic ? "كن جزءاً من التغيير" : "Be Part of the Change" }}
        </h2>
        <p class="lead mb-4 animate-slide-up">
          {{
            isArabic
              ? "ساهم في إحداث فرق حقيقي في حياة الأسر المتضررة في غزة"
              : "Contribute to making a real difference in the lives of affected families in Gaza"
          }}
        </p>
        <div
          class="d-flex flex-wrap gap-3 justify-content-center animate-slide-up-delay"
        >
          <router-link to="/donate" class="btn btn-light btn-lg">{{
            t.hero.donateBtn
          }}</router-link>
          <a
            href="https://wa.me/972567225829"
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
import { computed } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";

const { currentLanguage, isArabic } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);

const stats = computed(() => [
  { number: "50+", label: "Sponsored Children" },
  { number: "8", label: "Active Projects" },
  { number: "1000+", label: "Beneficiary Families" },
  { number: "24/7", label: "Quick Response" },
]);

const values = computed(() => [
  {
    title: "Transparency",
    description: "We commit to transparency in all our work",
  },
  {
    title: "Justice",
    description: "We promote human justice for all",
  },
  {
    title: "Sincerity",
    description: "We work sincerely to serve the community",
  },
  {
    title: "Responsibility",
    description: "We carry social responsibility",
  },
]);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-right {
  animation: slideRight 1s ease-in-out;
}

.animate-slide-left {
  animation: slideLeft 1s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-in-out;
}

.animate-slide-up-delay {
  animation: slideUpDelay 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideUpDelay {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

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

.chairman-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.chairman-image-wrapper {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.chairman-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(139, 36, 36, 0.2);
  transition: transform 0.3s ease;
}

.chairman-image:hover {
  transform: scale(1.02);
}

.chairman-name-badge {
  background: linear-gradient(135deg, #8b2424 0%, #a82e2e 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(139, 36, 36, 0.3);
}

.chairman-message-content {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border-right: 5px solid #8b2424;
}

.bismillah {
  font-size: 1.3rem;
  font-weight: 600;
  color: #8b2424;
  text-align: center;
  font-family: "Amiri", serif;
}

.message-text {
  line-height: 2;
  color: #495057;
  font-size: 1.05rem;
  text-align: justify;
}

.chairman-signature {
  border-top: 2px solid #e9ecef;
  padding-top: 1.5rem;
}

@media (max-width: 991px) {
  .chairman-message-content {
    padding: 2rem;
    border-right: none;
    border-top: 5px solid #8b2424;
  }

  .chairman-section {
    padding: 3rem 0;
  }
}
</style>
