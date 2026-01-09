<template>
  <div>
    <AppHeader />

    <section class="hero-section animate-fade-in">
      <div class="container text-center">
        <h1 class="hero-title animate-slide-up">
          {{ t.legalStatus.heroTitle }}
        </h1>
        <p class="hero-description animate-slide-up-delay">
          {{ t.legalStatus.heroSubtitle }}
        </p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <!-- Basic Information Card -->
        <div class="card mb-5 card-hover-lift animate-slide-up">
          <div class="card-body p-4 p-md-5">
            <h2 class="h3 fw-bold mb-4 text-primary">
              <span class="icon-badge">📋</span>
              {{ t.legalStatus.basicInfo }}
            </h2>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.arabicName
                  }}</label>
                  <div class="info-box">
                    {{ t.legalStatus.arabicNameValue }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.englishName
                  }}</label>
                  <div class="info-box">
                    {{ t.legalStatus.englishNameValue }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.address
                  }}</label>
                  <div class="info-box">{{ t.legalStatus.addressValue }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.workArea
                  }}</label>
                  <div class="info-box">{{ t.legalStatus.workAreaValue }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">phone</label>
                  <div class="info-box">
                    <a
                      :href="`tel:${t.contact.phone}`"
                      class="text-decoration-none"
                    >
                      {{ t.contact.phone }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2"> email </label>
                  <div class="info-box">
                    <a
                      :href="`mailto:${t.contact.email}`"
                      class="text-decoration-none"
                    >
                      {{ t.contact.email }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.contactPerson
                  }}</label>
                  <div class="info-box">
                    {{ t.legalStatus.contactPersonValue }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="info-item">
                  <label class="fw-bold text-muted mb-2">{{
                    t.legalStatus.contactRole
                  }}</label>
                  <div class="info-box">
                    {{ t.legalStatus.contactRoleValue }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Organization Definition -->
        <div
          class="card mb-5 card-hover-lift animate-slide-up"
          style="animation-delay: 0.1s"
        >
          <div class="card-body p-4 p-md-5">
            <h2 class="h3 fw-bold mb-4 text-primary">
              <span class="icon-badge">🏛️</span>
              {{ t.legalStatus.organizationDef }}
            </h2>
            <p class="lead text-muted">
              {{ t.legalStatus.organizationDefText }}
            </p>
          </div>
        </div>

        <!-- Vision and Mission -->
        <div class="row g-4 mb-5">
          <div class="col-lg-6">
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              style="animation-delay: 0.2s"
            >
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-primary">
                  <span class="icon-badge">🎯</span>
                  {{ t.legalStatus.vision }}
                </h2>
                <p class="text-muted">{{ t.legalStatus.visionText }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              style="animation-delay: 0.3s"
            >
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-primary">
                  <span class="icon-badge">💡</span>
                  {{ t.legalStatus.mission }}
                </h2>
                <p class="text-muted">{{ t.legalStatus.missionText }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Target Group and Values -->
        <div class="row g-4 mb-5">
          <div class="col-lg-6">
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              style="animation-delay: 0.4s"
            >
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-primary">
                  <span class="icon-badge">👥</span>
                  {{ t.legalStatus.targetGroup }}
                </h2>
                <p class="text-muted">{{ t.legalStatus.targetGroupText }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              style="animation-delay: 0.5s"
            >
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-primary">
                  <span class="icon-badge">⭐</span>
                  {{ t.legalStatus.values }}
                </h2>
                <p class="text-muted">{{ t.legalStatus.valuesText }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategic Goals -->
        <div
          class="card card-hover-lift animate-slide-up"
          style="animation-delay: 0.6s"
        >
          <div class="card-body p-4 p-md-5">
            <h2 class="h3 fw-bold mb-4 text-primary">
              <span class="icon-badge">🎯</span>
              {{ t.legalStatus.strategicGoals }}
            </h2>
            <ul class="goals-list">
              <li
                v-for="(goal, index) in t.legalStatus.goals"
                :key="index"
                class="goal-item"
              >
                <span class="goal-number">{{ index + 1 }}</span>
                <span class="goal-text">{{ goal }}</span>
              </li>
            </ul>
          </div>
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

const { currentLanguage } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
  animation-fill-mode: both;
}

.animate-slide-up-delay {
  animation: slideUp 1s ease-out 0.3s;
  animation-fill-mode: both;
}

.card-hover-lift {
  transition: all 0.3s ease;
}

.card-hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.icon-badge {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.info-item {
  margin-bottom: 1rem;
}

.info-box {
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 4px solid #8b1538;
}

.goals-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.goal-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.goal-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.goal-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #8b1538 0%, #6b0f2a 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;
}

.goal-text {
  flex: 1;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
