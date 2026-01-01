<template>
  <div>
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section animate-fade-in">
      <div class="container text-center">
        <h1 class="hero-title animate-slide-up">{{ t.contactPage.title }}</h1>
        <p class="hero-description animate-slide-up-delay">
          {{ t.contactPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section>
      <div class="container">
        <div class="row g-4 mb-5">
          <div class="col-md-4 animate-slide-up" style="animation-delay: 0.1s">
            <div class="card h-100 card-hover-lift">
              <div class="card-body text-center">
                <div class="icon-wrapper primary mb-3 icon-pulse">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h5 class="fw-bold mb-3">{{ t.contactPage.address }}</h5>
                <p class="text-muted leading-relaxed">
                  {{ t.contactPage.addressText }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 animate-slide-up" style="animation-delay: 0.2s">
            <div class="card h-100 card-hover-lift">
              <div class="card-body text-center">
                <div class="icon-wrapper secondary mb-3 icon-pulse">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h5 class="fw-bold mb-3">{{ t.contactPage.phone }}</h5>
                <a href="tel:+970567225829" class="text-decoration-none"
                  >+970567225829</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 animate-slide-up" style="animation-delay: 0.3s">
            <div class="card h-100 card-hover-lift">
              <div class="card-body text-center">
                <div class="icon-wrapper primary mb-3 icon-pulse">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h5 class="fw-bold mb-3">{{ t.contactPage.email }}</h5>
                <a
                  href="mailto:orghhrdg2004@gmail.com"
                  class="text-decoration-none"
                  >orghhrdg2004@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- added inquiry form section -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8">
            <div
              class="card animate-slide-up card-hover-lift"
              style="animation-delay: 0.4s"
            >
              <div class="card-body p-4">
                <h3 class="h4 fw-bold mb-4 text-center">
                  {{ t.contactPage.formTitle }}
                </h3>
                <p class="text-center text-muted mb-4 leading-relaxed">
                  {{ t.contactPage.formSubtitle }}
                </p>

                <form @submit.prevent="handleSubmit" class="contact-form">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{
                        t.contactPage.nameLabel
                      }}</label>
                      <input
                        v-model="formData.name"
                        type="text"
                        class="form-control"
                        required
                        :placeholder="t.contactPage.namePlaceholder"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{
                        t.contactPage.emailLabel
                      }}</label>
                      <input
                        v-model="formData.email"
                        type="email"
                        class="form-control"
                        required
                        :placeholder="t.contactPage.emailPlaceholder"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label fw-semibold">{{
                        t.contactPage.subjectLabel
                      }}</label>
                      <input
                        v-model="formData.subject"
                        type="text"
                        class="form-control"
                        required
                        :placeholder="t.contactPage.subjectPlaceholder"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label fw-semibold">{{
                        t.contactPage.messageLabel
                      }}</label>
                      <textarea
                        v-model="formData.message"
                        class="form-control"
                        rows="5"
                        required
                        :placeholder="t.contactPage.messagePlaceholder"
                      ></textarea>
                    </div>
                    <div class="col-12 text-center">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg px-5"
                        :disabled="isSubmitting"
                      >
                        <span v-if="!isSubmitting">{{
                          t.contactPage.sendButton
                        }}</span>
                        <span v-else>{{ t.contactPage.sendingButton }}</span>
                      </button>
                    </div>
                    <div v-if="submitStatus" class="col-12">
                      <div
                        :class="[
                          'alert',
                          submitStatus === 'success'
                            ? 'alert-success'
                            : 'alert-info',
                        ]"
                        role="alert"
                      >
                        {{ submitMessage }}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Section -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div
              class="card animate-slide-up card-hover-lift"
              style="animation-delay: 0.5s"
            >
              <div class="card-body p-4">
                <h3 class="h4 fw-bold mb-4 text-center">
                  {{ t.contactPage.whatsappTitle }}
                </h3>
                <p class="text-center text-muted mb-4 leading-relaxed">
                  {{ t.contactPage.whatsappSubtitle }}
                </p>
                <div class="text-center">
                  <a
                    href="https://wa.me/970567225829"
                    target="_blank"
                    class="btn btn-whatsapp btn-lg"
                  >
                    {{ t.contactPage.whatsappButton }}
                  </a>
                </div>
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
import { computed, ref } from "vue";
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

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref(null);
const submitMessage = ref("");

const handleSubmit = () => {
  isSubmitting.value = true;

  // Create mailto link with form data
  const mailtoLink = `mailto:orghhrdg2004@gmail.com?subject=${encodeURIComponent(
    formData.value.subject
  )}&body=${encodeURIComponent(
    `Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessage:\n${formData.value.message}`
  )}`;

  // Open mail client
  window.location.href = mailtoLink;

  // Show confirmation
  submitStatus.value = "success";
  submitMessage.value = t.value.contactPage.successMessage;

  // Reset form after delay
  setTimeout(() => {
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    isSubmitting.value = false;
    submitStatus.value = null;
  }, 3000);
};
</script>

<style scoped>
.contact-form .form-control {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #8b1538;
  box-shadow: 0 0 0 0.2rem rgba(139, 21, 56, 0.15);
}

.contact-form .form-label {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.contact-form textarea.form-control {
  resize: vertical;
  min-height: 120px;
}
</style>
