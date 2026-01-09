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

        <!-- Professional Social Media Section -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-10">
            <div
              class="card social-media-card animate-slide-up"
              style="animation-delay: 0.4s"
            >
              <div class="card-body p-5 text-center">
                <h3 class="h4 fw-bold mb-3">
                  {{
                    isArabic
                      ? "تابعنا على وسائل التواصل الاجتماعي"
                      : "Follow Us on Social Media"
                  }}
                </h3>
                <p class="text-muted mb-4">
                  {{
                    isArabic
                      ? "تابع أحدث أخبارنا ومشاريعنا وتحديثاتنا الإنسانية"
                      : "Follow our latest news, projects, and humanitarian updates"
                  }}
                </p>
                <div class="social-links-grid">
                  <a
                    href="https://youtube.com/@sanad_gazaaid?si=OeduTDk4C89St-Er"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link-card youtube"
                  >
                    <div class="social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        />
                      </svg>
                    </div>
                    <div class="social-text">
                      <h5 class="mb-1">YouTube</h5>
                      <p class="mb-0">
                        {{ isArabic ? "@sanad_gazaaid" : "@sanad_gazaaid" }}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Section -->
        <div class="row justify-content-center whatsapp-section">
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
import { computed, ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";

const { currentLanguage, isArabic } = useLanguageStore();
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
.whatsapp-section {
  margin-bottom: 80px; /* عدّل الرقم حسب الذوق */
}

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

/* Added professional social media card styles */
.social-media-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.social-links-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-link-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  min-width: 280px;
}

.social-link-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.social-link-card.youtube {
  color: #ff0000;
}

.social-link-card.youtube:hover {
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: white;
}

.social-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.social-link-card.youtube:hover .social-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.social-text h5 {
  font-weight: 700;
  margin: 0;
  font-size: 1.2rem;
}

.social-text p {
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .social-link-card {
    min-width: 100%;
  }
}
</style>
