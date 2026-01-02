<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <div class="modal-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
              />
            </svg>
          </div>
          <h2 class="modal-title">{{ t.modal.title }}</h2>
          <button class="modal-close" @click="closeModal" aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <p class="modal-text">
            <strong>{{ t.modal.orgName }}</strong> {{ t.modal.message }}
          </p>

          <div class="modal-divider"></div>

          <p class="modal-footer-text">
            {{ t.modal.footerMessage }}
          </p>
        </div>

        <div class="modal-actions">
          <button class="modal-btn-primary" @click="closeModal">
            {{ t.modal.button }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { translations } from "../i18n/translations";

const t = translations.en;

const showModal = ref(false);

onMounted(() => {
  setTimeout(() => {
    showModal.value = true;
  }, 500);
});

const closeModal = () => {
  showModal.value = false;
  localStorage.setItem("hasSeenWelcomeModal", "true");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 1.5rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: modalSlideIn 0.4s ease-out;
  overflow: hidden;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
}

.modal-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  animation: iconPulseModal 2s ease-in-out infinite;
}

@keyframes iconPulseModal {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
}

.modal-icon svg {
  width: 32px;
  height: 32px;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-body {
  padding: 2rem;
}

.modal-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #1e293b;
  margin: 0;
  text-align: center;
}

.modal-text strong {
  color: #d97706;
  font-weight: 700;
}

.modal-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #d97706, transparent);
  margin: 1.5rem 0;
}

.modal-footer-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #059669;
  text-align: center;
  margin: 0;
  font-style: italic;
}

.modal-actions {
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: center;
}

.modal-btn-primary {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  color: white;
  border: none;
  padding: 0.875rem 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
}

.modal-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(-50px) scale(0.9);
}

@media (max-width: 640px) {
  .modal-container {
    margin: 1rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-text {
    font-size: 1rem;
  }

  .modal-footer-text {
    font-size: 1.125rem;
  }
}
</style>
