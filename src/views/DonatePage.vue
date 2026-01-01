<template>
  <div>
    <AppHeader />

    <!-- Hero Section with Emotional Impact -->
    <section class="donate-hero">
      <div class="floating-particles"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content" data-aos="fade-right">
            <h1 class="display-3 fw-bold mb-4">
              {{ t.donatePage.title }}
            </h1>
            <p class="lead mb-5">
              {{ t.donatePage.subtitle }}
            </p>
            <div class="d-flex gap-3 flex-wrap">
              <a
                href="#crypto-section"
                class="btn btn-primary btn-lg px-5 py-3"
              >
                {{ t.donatePage.donateNow }}
              </a>
              <a
                href="#bank-info"
                class="btn btn-outline-light btn-lg px-5 py-3"
              >
                {{ t.donatePage.learnMore }}
              </a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div class="impact-visual">
              <div class="impact-circle">
                <div
                  class="impact-stat"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div class="stat-number">+1000</div>
                  <div class="stat-label">
                    {{ t.donatePage.familiesHelped }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crypto Donation Section -->
    <section id="crypto-section" class="crypto-section">
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <h2 class="display-4 fw-bold mb-4">
            {{ t.donatePage.cryptoTitle }}
          </h2>
          <p
            class="lead text-muted mb-5"
            style="max-width: 700px; margin: 0 auto"
          >
            {{ t.donatePage.cryptoSubtitle }}
          </p>
        </div>

        <div v-if="loading" class="text-center py-5">
          <div
            class="spinner-border text-primary"
            style="width: 3rem; height: 3rem"
            role="status"
          >
            <span class="visually-hidden">{{ t.donatePage.loading }}</span>
          </div>
        </div>
        <div v-else-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <div v-else class="row g-4">
          <div
            v-for="(crypto, index) in cryptos"
            :key="crypto.id"
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="crypto-card-modern">
              <div class="crypto-header">
                <div class="crypto-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v12M9 9h6M9 15h6"></path>
                  </svg>
                </div>
                <h3 class="crypto-name">{{ crypto.name }}</h3>
                <span class="crypto-network">{{ crypto.network }}</span>
              </div>

              <div class="qr-container">
                <img
                  :src="crypto.qr"
                  :alt="crypto.name"
                  class="qr-code"
                  @error="handleImageError"
                />
              </div>

              <div class="address-container">
                <label class="address-label">{{
                  t.donatePage.walletAddress
                }}</label>
                <div class="address-display">
                  <code>{{ crypto.address }}</code>
                </div>
                <button
                  @click="copyAddress(crypto.address, crypto.name)"
                  class="copy-button"
                  :class="{ copied: copiedCrypto === crypto.name }"
                >
                  <svg
                    v-if="copiedCrypto !== crypto.name"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {{
                    copiedCrypto === crypto.name
                      ? t.donatePage.copiedAddress
                      : t.donatePage.copyAddress
                  }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bank Information Section -->
    <section id="bank-info" class="bank-section">
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <h2 class="display-4 fw-bold mb-4">
            {{ t.donatePage.bankInfo }}
          </h2>
          <p class="lead text-muted">
            {{ t.donatePage.bankInfoSubtitle }}
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="bank-card" data-aos="fade-up" data-aos-delay="100">
              <div class="row g-4">
                <div class="col-md-6">
                  <div
                    class="info-item"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div class="info-label">{{ t.donatePage.bankName }}</div>
                    <div class="info-value">Bank of Palestine</div>
                  </div>
                  <div
                    class="info-item"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    <div class="info-label">{{ t.donatePage.bankAddress }}</div>
                    <div class="info-value">Palestine Gaza South</div>
                  </div>
                  <div
                    class="info-item"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <div class="info-label">{{ t.donatePage.swiftCode }}</div>
                    <div class="info-value">PALSPS22</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="info-item"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <div class="info-label">{{ t.donatePage.beneficiary }}</div>
                    <div class="info-value">FAIQ AYMAN FAIQ ABO AISHA</div>
                  </div>
                  <div
                    class="info-item"
                    data-aos="fade-left"
                    data-aos-delay="250"
                  >
                    <div class="info-label">
                      {{ t.donatePage.beneficiaryAddress }}
                    </div>
                    <div class="info-value">
                      Palestine, Gaza Strip, South, Gaza, Al-Jalaa Street
                    </div>
                  </div>
                  <div
                    class="info-item"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <div class="info-label">
                      {{ t.donatePage.accountNumber }}
                    </div>
                    <div class="info-value">4123571</div>
                  </div>
                </div>
              </div>

              <div class="iban-section" data-aos="fade-up" data-aos-delay="400">
                <h4 class="iban-title">{{ t.donatePage.ibanTitle }}</h4>
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="iban-card">
                      <div class="currency-badge">
                        {{
                          isArabic ? "دولار أمريكي (USD)" : "US Dollar (USD)"
                        }}
                      </div>
                      <code class="iban-code"
                        >PS77PALS045441235710013000000</code
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="iban-card">
                      <div class="currency-badge">
                        {{ isArabic ? "شيكل (ILS)" : "Shekel (ILS)" }}
                      </div>
                      <code class="iban-code"
                        >PS62PALS045441235710993000000</code
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="iban-card">
                      <div class="currency-badge">
                        {{ isArabic ? "يورو (EUR)" : "Euro (EUR)" }}
                      </div>
                      <code class="iban-code"
                        >PS82PALS045441235710333000000</code
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container text-center">
        <div data-aos="zoom-in">
          <h2 class="display-4 fw-bold text-white mb-4">
            {{ t.donatePage.thankYouTitle }}
          </h2>
          <p
            class="lead text-white mb-5"
            style="max-width: 600px; margin: 0 auto"
          >
            {{ t.donatePage.thankYouText }}
          </p>
          <a
            href="https://wa.me/970567225829"
            target="_blank"
            class="btn btn-light btn-lg px-5 py-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="margin-right: 8px"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
            {{ t.donatePage.contactButton }}
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";
import AOS from "aos";
import "aos/dist/aos.css";

const { currentLanguage, isArabic } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);

const copiedCrypto = ref("");
const cryptos = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchCryptos = async () => {
  try {
    loading.value = true;
    const response = await fetch(
      "https://org-sanad-default-rtdb.firebaseio.com/Donate.json"
    );
    if (!response.ok) {
      throw new Error("فشل في جلب البيانات");
    }
    const data = await response.json();
    if (data) {
      cryptos.value = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
    }
  } catch (err) {
    console.error("Error fetching cryptos:", err);
    error.value = isArabic.value
      ? "حدث خطأ في تحميل بيانات التبرع"
      : "Error loading donation data";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCryptos();
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });
});

const copyAddress = (address, name) => {
  navigator.clipboard.writeText(address);
  copiedCrypto.value = name;
  setTimeout(() => {
    copiedCrypto.value = "";
  }, 2000);
};

const handleImageError = (event) => {
  event.target.src = "/placeholder.svg?height=300&width=300";
};
</script>

<style scoped>
/* Hero Section with Dark Theme */
.donate-hero {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 8rem 0 6rem;
  overflow: hidden;
  color: white;
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, #d97706, transparent),
    radial-gradient(1px 1px at 50% 50%, #059669, transparent),
    radial-gradient(2px 2px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 60%, #d97706, transparent);
  background-size: 200% 200%;
  animation: particles 20s ease-in-out infinite;
  opacity: 0.4;
}

@keyframes particles {
  0%,
  100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.impact-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.impact-circle {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.2),
    rgba(5, 150, 105, 0.2)
  );
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.impact-stat {
  text-align: center;
}

.stat-number {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #d97706, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* Crypto Section */
.crypto-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, #f8f9fa 0%, white 100%);
}

.crypto-card-modern {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  height: 100%;
}

.crypto-card-modern:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 60px rgba(217, 119, 6, 0.2);
  border-color: var(--primary-color);
}

.crypto-header {
  text-align: center;
  margin-bottom: 2rem;
}

.crypto-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.1),
    rgba(5, 150, 105, 0.1)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.crypto-card-modern:hover .crypto-icon {
  transform: rotate(360deg) scale(1.1);
}

.crypto-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--foreground);
}

.crypto-network {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: linear-gradient(135deg, var(--primary-color), #b45309);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.qr-container {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.crypto-card-modern:hover .qr-code {
  transform: scale(1.05);
}

.address-container {
  margin-top: 1.5rem;
}

.address-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--muted-foreground);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.address-display {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  word-break: break-all;
}

.address-display code {
  font-family: "Courier New", monospace;
  font-size: 0.875rem;
  color: var(--foreground);
}

.copy-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), #b45309);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(217, 119, 6, 0.3);
}

.copy-button.copied {
  background: linear-gradient(135deg, #10b981, #059669);
}

/* Bank Section */
.bank-section {
  padding: 6rem 0;
  background: white;
}

.bank-card {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
}

.info-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.info-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--muted-foreground);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
}

.iban-section {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid #e9ecef;
}

.iban-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--foreground);
}

.iban-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.iban-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(217, 119, 6, 0.15);
}

.currency-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.1),
    rgba(5, 150, 105, 0.1)
  );
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.iban-code {
  display: block;
  font-family: "Courier New", monospace;
  font-size: 0.875rem;
  color: var(--foreground);
  word-break: break-all;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(217, 119, 6, 0.1) 0%,
    transparent 70%
  );
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .donate-hero {
    padding: 5rem 0 4rem;
  }

  .impact-circle {
    width: 280px;
    height: 280px;
  }

  .stat-number {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .donate-hero {
    padding: 4rem 0 3rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .impact-visual {
    margin-top: 3rem;
    min-height: 300px;
  }

  .crypto-section,
  .bank-section,
  .cta-section {
    padding: 4rem 0;
  }

  .bank-card {
    padding: 2rem;
  }
}
</style>
