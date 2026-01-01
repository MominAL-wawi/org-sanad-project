<template>
  <div>
    <AppHeader />

    <!-- استبدال الأنيميشن الثابتة بـ AOS -->
    <section class="hero-section">
      <div class="container text-center">
        <h1 class="hero-title" data-aos="fade-up">
          {{ t.projects.heroTitle }}
        </h1>
        <p class="hero-description" data-aos="fade-up" data-aos-delay="100">
          {{ t.projects.heroSubtitle }}
        </p>
      </div>
    </section>

    <section class="projects-showcase">
      <div class="container">
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">جاري التحميل...</span>
          </div>
        </div>
        <div v-else-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <div v-else class="row g-4">
          <!-- إضافة AOS attributes للبطاقات -->
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="col-12 col-sm-6 col-lg-4"
          >
            <div
              class="card h-100 card-hover-lift project-card"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="project-image-container">
                <div class="project-image-wrapper">
                  <img
                    :src="project.image || `/image/project${project.id}/1.jpeg`"
                    :alt="isArabic ? project.titleAr : project.titleEn"
                    class="project-image"
                    loading="lazy"
                    @error="handleImageError"
                  />
                  <div class="image-overlay">
                    <div class="overlay-badge">
                      {{
                        isArabic
                          ? `مشروع ${project.id}`
                          : `Project ${project.id}`
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <div class="mb-3">
                  <span class="badge bg-primary project-badge">
                    {{
                      isArabic ? `مشروع ${project.id}` : `Project ${project.id}`
                    }}
                  </span>
                </div>
                <h5 class="card-title fw-bold mb-3 text-balance project-title">
                  {{ isArabic ? project.titleAr : project.titleEn }}
                </h5>
                <p class="card-text text-muted leading-relaxed flex-grow-1">
                  {{ isArabic ? project.descriptionAr : project.descriptionEn }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-muted" style="margin-bottom: 0; padding-bottom: 4rem">
      <div class="container">
        <!-- إضافة AOS للعناوين -->
        <h2 class="section-title" data-aos="fade-up">
          {{ t.projects.departmentsTitle }}
        </h2>
        <p class="section-description" data-aos="fade-up" data-aos-delay="100">
          {{ t.projects.departmentsSubtitle }}
        </p>
        <div class="row g-4">
          <!-- إضافة AOS للبطاقات -->
          <div
            v-for="(dept, index) in t.projects.departments"
            :key="dept.title"
            class="col-md-6 col-lg-4"
          >
            <div
              class="card h-100 card-hover-lift"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="card-body p-4">
                <div class="icon-wrapper secondary mb-3 icon-pulse">
                  <span class="dept-icon">{{ dept.icon }}</span>
                </div>
                <h5 class="card-title fw-bold mb-3">{{ dept.title }}</h5>
                <p class="card-text text-muted leading-relaxed">
                  {{ dept.description }}
                </p>
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
import { ref, computed, onMounted } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useLanguageStore } from "../store/language";
import { translations } from "../i18n/translations";
import AOS from "aos";
import "aos/dist/aos.css";

const { currentLanguage, isArabic } = useLanguageStore();
const t = computed(() => translations[currentLanguage.value]);

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProjects = async () => {
  try {
    loading.value = true;
    const response = await fetch(
      "https://org-sanad-default-rtdb.firebaseio.com/projects.json"
    );
    if (!response.ok) {
      throw new Error("فشل في جلب البيانات");
    }
    const data = await response.json();
    if (data) {
      projects.value = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
    }
  } catch (err) {
    console.error("Error fetching projects:", err);
    error.value = isArabic.value
      ? "حدث خطأ في تحميل المشاريع"
      : "Error loading projects";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });
  fetchProjects();
});

const handleImageError = (event) => {
  event.target.src = "/placeholder.svg?height=250&width=350";
};
</script>

<style scoped>
.projects-showcase {
  padding: 4rem 0;
  background: linear-gradient(
    180deg,
    rgba(217, 119, 6, 0.02) 0%,
    rgba(5, 150, 105, 0.02) 100%
  );
}

.project-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem 0.75rem 0 0;
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 65%;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.08),
    rgba(5, 150, 105, 0.08)
  );
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
  will-change: transform;
  backface-visibility: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;
}

.overlay-badge {
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-color);
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.9rem;
  transform: translateY(20px);
  transition: transform 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-card:hover .project-image {
  transform: scale(1.1);
  filter: brightness(1.05);
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .overlay-badge {
  transform: translateY(0);
}

.project-card {
  border: 2px solid transparent;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border-radius: 0.875rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.project-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 20px 50px rgba(217, 119, 6, 0.2);
  transform: translateY(-12px);
}

.project-badge {
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.2);
}

.project-title {
  color: var(--foreground);
  transition: color 0.3s ease;
  font-size: 1.25rem;
  line-height: 1.4;
}

.project-card:hover .project-title {
  color: var(--primary-color);
}

.dept-icon {
  font-size: 2.5rem;
  display: block;
  line-height: 1;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.1),
    rgba(5, 150, 105, 0.1)
  );
  transition: all 0.3s ease;
}

.card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(
    135deg,
    rgba(217, 119, 6, 0.2),
    rgba(5, 150, 105, 0.2)
  );
}

.icon-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@media (max-width: 576px) {
  .project-image-wrapper {
    padding-bottom: 70%;
  }

  .projects-showcase {
    padding: 3rem 0;
  }

  .project-badge {
    font-size: 0.8rem;
    padding: 0.35rem 0.85rem;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .dept-icon {
    font-size: 2rem;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .project-image-wrapper {
    padding-bottom: 68%;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .project-image-wrapper {
    padding-bottom: 66%;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .project-card {
    will-change: transform, box-shadow;
  }
}
</style>
