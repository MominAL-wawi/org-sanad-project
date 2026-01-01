<template>
  <!-- Top bar with contact info and language switcher -->
  <div class="top-bar">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="top-bar-left d-flex gap-3">
          <a :href="`mailto:${t.contact.email}`" class="top-bar-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="top-bar-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {{ t.contact.email }}
          </a>
          <a :href="`tel:${t.contact.phone}`" class="top-bar-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="top-bar-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {{ t.contact.phone }}
          </a>
        </div>
        <button
          @click="toggleLanguage"
          class="language-toggle-btn"
          :title="isArabic ? 'Switch to English' : 'التبديل إلى العربية'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="language-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          {{ isArabic ? "English" : "عربي" }}
        </button>
      </div>
    </div>
  </div>

  <!-- Main navigation with mobile-optimized hamburger menu -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="navbar-layout">
        <!-- اللوجو وقائمة الهمبرغر في صف واحد للموبايل -->
        <div class="navbar-brand-wrapper">
          <router-link to="/" class="navbar-brand d-flex align-items-center">
            <img
              src="/image/logo.png"
              alt="سند"
              height="50"
              class="logo-animate"
            />
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!-- القائمة المنسدلة للموبايل -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item nav-item-animate">
              <router-link to="/" class="nav-link" active-class="active">
                {{ t.nav.home }}
              </router-link>
            </li>
            <li class="nav-item nav-item-animate">
              <router-link to="/about" class="nav-link" active-class="active">
                {{ t.nav.about }}
              </router-link>
            </li>
            <li class="nav-item nav-item-animate">
              <router-link
                to="/legal-status"
                class="nav-link"
                active-class="active"
              >
                {{ t.nav.legalStatus }}
              </router-link>
            </li>
            <li class="nav-item nav-item-animate">
              <router-link
                to="/projects"
                class="nav-link"
                active-class="active"
              >
                {{ t.nav.projects }}
              </router-link>
            </li>
            <li class="nav-item nav-item-animate">
              <router-link
                to="/articles"
                class="nav-link"
                active-class="active"
              >
                {{ t.nav.articles }}
              </router-link>
            </li>
            <li class="nav-item nav-item-animate">
              <router-link to="/contact" class="nav-link" active-class="active">
                {{ t.nav.contact }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Donate button -->
        <div class="navbar-action-section d-none d-lg-block">
          <router-link to="/donate" class="btn btn-primary donate-btn-header">
            {{ t.nav.donate }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { computed } from "vue";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { useLanguageStore } from "../store/language";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { translations } from "../i18n/translations";

// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const { currentLanguage, isArabic, toggleLanguage } = useLanguageStore();
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
/* Top bar styling with burgundy background */
.top-bar {
  background: linear-gradient(135deg, #8b1538 0%, #6b0f2a 100%);
  color: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
}

.top-bar-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  opacity: 0.95;
}

.top-bar-link:hover {
  opacity: 1;
  color: #ffd700;
  transform: translateY(-1px);
}

.top-bar-icon {
  width: 16px;
  height: 16px;
}

.language-toggle-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.language-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.language-icon {
  width: 18px;
  height: 18px;
}

/* 3-section navbar layout */
.navbar-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

.navbar-section {
  display: flex;
  align-items: center;
}

.navbar-logo-section {
  flex: 0 0 auto;
}

.navbar-nav-section {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
}

.navbar-action-section {
  flex: 0 0 auto;
}

/* Responsive adjustments */
.navbar-brand-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-toggler {
  border: 1px solid #8b1538;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  background-color: rgba(139, 21, 56, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(139, 21, 56, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(139, 21, 56, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-layout {
  width: 100%;
}

/* Desktop layout */
@media (min-width: 992px) {
  .navbar-brand-wrapper {
    width: auto;
  }

  .navbar-toggler {
    display: none;
  }

  .navbar-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-collapse {
    flex-grow: 0;
  }
}

/* Mobile layout */
@media (max-width: 991px) {
  .navbar-collapse {
    margin-top: 1rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navbar-nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    background-color: rgba(139, 21, 56, 0.1);
  }

  .navbar-action-section {
    display: none;
  }

  .top-bar-left {
    flex-direction: column;
    gap: 0.5rem !important;
  }
}

@media (max-width: 576px) {
  .top-bar-link span {
    display: none;
  }

  .language-toggle-btn span {
    font-size: 0.75rem;
  }
}
</style>
