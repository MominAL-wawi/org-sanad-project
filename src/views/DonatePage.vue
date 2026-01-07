<template>
  <div>
    <AppHeader />

    <!-- Added translations -->
    <section class="hero-section animate-fade-in">
      <div class="container text-center">
        <h1 class="hero-title animate-slide-up">{{ t.donatePage.title }}</h1>
        <p class="hero-description animate-slide-up-delay">
          {{ t.donatePage.subtitle }}
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-10">
            <div class="card animate-slide-up card-hover-lift">
              <div class="card-body p-4 p-md-5">
                <h2 class="h3 fw-bold mb-4 text-center">
                  {{ t.donatePage.bankInfo }}
                </h2>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.bankName
                      }}</label>
                      <div class="address-box">Bank of Palestine</div>
                    </div>
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.bankAddress
                      }}</label>
                      <div class="address-box">Palestine Gaza South</div>
                    </div>
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.swiftCode
                      }}</label>
                      <div class="address-box">PALSPS22</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.beneficiary
                      }}</label>
                      <div class="address-box">FAIQ AYMAN FAIQ ABO AISHA</div>
                    </div>
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.beneficiaryAddress
                      }}</label>
                      <div class="address-box">
                        Palestine, Gaza Strip, South, Gaza, Al-Jalaa Street
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="fw-bold text-muted mb-2">{{
                        t.donatePage.accountNumber
                      }}</label>
                      <div class="address-box">4123571</div>
                    </div>
                  </div>
                </div>

                <h3 class="h5 fw-bold mt-4 mb-3 text-center">
                  {{ t.donatePage.ibanTitle }}
                </h3>
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="card bg-muted card-hover-lift">
                      <div class="card-body text-center">
                        <div class="fw-bold text-primary mb-2">
                          {{
                            isArabic ? "دولار أمريكي (USD)" : "US Dollar (USD)"
                          }}
                        </div>
                        <div class="address-box">
                          PS77PALS045441235710013000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card bg-muted card-hover-lift">
                      <div class="card-body text-center">
                        <div class="fw-bold text-primary mb-2">
                          {{ isArabic ? "شيكل (ILS)" : "Shekel (ILS)" }}
                        </div>
                        <div class="address-box">
                          PS62PALS045441235710993000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card bg-muted card-hover-lift">
                      <div class="card-body text-center">
                        <div class="fw-bold text-primary mb-2">
                          {{ isArabic ? "يورو (EUR)" : "Euro (EUR)" }}
                        </div>
                        <div class="address-box">
                          PS82PALS045441235710333000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Added new IBAN for Dinar -->
                  <div class="col-md-4 mx-auto">
                    <div class="card bg-muted card-hover-lift">
                      <div class="card-body text-center">
                        <div class="fw-bold text-primary mb-2">
                          {{ isArabic ? "دينار (Dinar)" : "Dinar" }}
                        </div>
                        <div class="address-box">
                          PS45PALS045441235710293000000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="section-title animate-fade-in">
          {{ t.donatePage.cryptoTitle }}
        </h2>
        <p class="section-description animate-fade-in">
          {{ t.donatePage.cryptoSubtitle }}
        </p>

        <div class="row g-4">
          <div
            v-for="(crypto, index) in cryptos"
            :key="crypto.name"
            class="col-md-6 col-lg-4"
          >
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              :style="`animation-delay: ${index * 0.1}s`"
            >
              <div class="card-body crypto-card">
                <img :src="crypto.qr" :alt="crypto.name" class="img-fluid" />
                <h5 class="fw-bold mb-2">{{ crypto.name }}</h5>
                <div class="badge bg-primary mb-3">{{ crypto.network }}</div>
                <div class="mb-3">
                  <label class="fw-bold text-muted mb-2 d-block">{{
                    t.donatePage.walletAddress
                  }}</label>
                  <div class="address-box">{{ crypto.address }}</div>
                </div>
                <button
                  @click="copyAddress(crypto.address, crypto.name)"
                  class="btn btn-sm btn-outline-primary"
                >
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

    <section
      class="bg-gradient-primary text-white"
      style="margin-bottom: 0; padding-bottom: 4rem"
    >
      <div class="container text-center">
        <h2 class="h3 fw-bold mb-4 animate-fade-in">
          {{ t.donatePage.thankYouTitle }}
        </h2>
        <p class="lead mb-4 animate-slide-up">
          {{ t.donatePage.thankYouText }}
        </p>
        <a
          href="https://wa.me/972567225829"
          target="_blank"
          class="btn btn-light btn-lg animate-slide-up-delay"
        >
          {{ t.donatePage.contactButton }}
        </a>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { ref, computed } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { useLanguageStore } from "../store/language";
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
import { translations } from "../i18n/translations";

// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const { currentLanguage, isArabic } = useLanguageStore();
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const t = computed(() => translations[currentLanguage.value]);

const copiedCrypto = ref("");

const cryptos = ref([
  {
    name: "Solana",
    network: "Solana",
    address: "EHvEDu5oFnCo7b4E1o6Nuad79ycZAbELhXiJbz7gZz37",
    qr: "/image/sol.jpeg",
  },
  {
    name: "OG Chain",
    network: "OG Chain",
    address: "0x2dc61e8c703cf027876a7a7437d92b46d47d34db",
    qr: "/image/og.jpeg",
  },
  {
    name: "USDT",
    network: "Tron (TRC20)",
    address: "TENSPky2n9W45yycAsvR2M6nwL128p7yto",
    qr: "/image/ustd.jpeg",
  },
  {
    name: "Ethereum",
    network: "Ethereum (ERC20)",
    address: "0x2dc61e8c703cf027876a7a7437d92b46d47d34db",
    qr: "/image/eth.jpeg",
  },
  {
    name: "BNB",
    network: "opBNB",
    address: "0x2dc61e8c703cf027876a7a7437d92b46d47d34db",
    qr: "/image/bnb.jpeg",
  },
  {
    name: "Dash",
    network: "Dash",
    address: "XjigyU3QRZrtVSa2Q6qLsofHhs1HVHjMCE",
    qr: "/image/dash.jpeg",
  },
  {
    name: "Bitcoin",
    network: "BNB Smart Chain (BEP20)",
    address: "0x2dc61e8c703cf027876a7a7437d92b46d47d34db",
    qr: "/image/btc.jpeg",
  },
]);

const copyAddress = (address, name) => {
  navigator.clipboard.writeText(address);
  copiedCrypto.value = name;
  setTimeout(() => {
    copiedCrypto.value = "";
  }, 2000);
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-in-out;
}

.animate-slide-up-delay {
  animation: slideUp 1s ease-in-out 0.5s;
}

.card-hover-lift:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease-in-out;
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
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
