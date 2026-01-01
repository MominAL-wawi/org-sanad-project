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
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { computed } from "vue";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { useLanguageStore } from "../store/language";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { translations } from "../i18n/translations";

// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const { currentLanguage } = useLanguageStore();
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const t = computed(() => translations[currentLanguage.value]);
</script>
