<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- First column with organization info and translation support -->
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">{{ t.footer.title }}</h5>
          <p class="text-white-50">
            {{ t.footer.description }}
          </p>
        </div>
        <!-- Quick links with translation -->
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">{{ t.footer.quickLinks }}</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/">{{ t.nav.home }}</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about">{{ t.nav.about }}</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/projects">{{ t.nav.projects }}</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/articles">{{ t.nav.articles }}</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/contact">{{ t.nav.contact }}</router-link>
            </li>
          </ul>
        </div>
        <!-- Contact info with translation -->
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">{{ t.footer.contactUs }}</h5>
          <p class="text-white-50">{{ t.footer.address }}</p>
          <p class="text-white-50">
            {{ t.footer.phoneLabel }} {{ t.contact.phone }}
          </p>
          <p class="text-white-50">
            {{ t.footer.emailLabel }} {{ t.contact.email }}
          </p>
          <!-- Improved YouTube social link design -->
          <div class="social-links mt-4">
            <h6 class="text-white mb-3">
              {{ isArabic ? "تابعنا" : "Follow Us" }}
            </h6>
            <a
              href="https://youtube.com/@sanad_gazaaid?si=OeduTDk4C89St-Er"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link youtube"
              :aria-label="isArabic ? 'يوتيوب' : 'YouTube'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              <span class="social-label">YouTube</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Copyright with translation -->
      <div class="text-center pt-3 border-top border-secondary">
        <p class="text-white-50 mb-0">
          {{ t.footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";

const { currentLanguage, isArabic } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
/* Improved professional social links design */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links h6 {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-weight: 500;
  max-width: 200px;
}

.social-link:hover {
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  border-color: #ff0000;
  color: #fff;
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
}

.social-link svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.social-label {
  font-size: 1rem;
  font-weight: 600;
}

.social-link.youtube:hover svg {
  animation: pulse 1s infinite;
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

@media (max-width: 768px) {
  .social-link {
    max-width: 100%;
  }
}
</style>
