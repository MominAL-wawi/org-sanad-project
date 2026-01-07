<template>
  <div>
    <AppHeader />

    <section class="hero-section animate-fade-in">
      <div class="container text-center">
        <h1 class="hero-title animate-slide-up">{{ t.projects.heroTitle }}</h1>
        <p class="hero-description animate-slide-up-delay">
          {{ t.projects.heroSubtitle }}
        </p>
      </div>
    </section>

    <!-- Enhanced articles/projects section with improved image display -->
    <section>
      <div class="container">
        <div class="row g-4">
          <div
            v-for="(project, index) in t.projects.list"
            :key="project.id"
            class="col-12"
          >
            <div
              class="card article-card animate-slide-up"
              :style="`animation-delay: ${index * 0.1}s`"
            >
              <div class="row g-0 article-card-row">
                <!-- Enhanced image section with better aspect ratio and overlay effects -->
                <div class="col-md-4">
                  <div class="article-image-container">
                    <img
                      :src="getProjectMainImage(project.id)"
                      :alt="project.title"
                      class="article-image"
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
                <div class="col-md-8">
                  <div class="card-body article-content">
                    <div class="project-header">
                      <span class="badge bg-primary project-badge">
                        {{
                          isArabic
                            ? `المشروع ${project.id}`
                            : `Project ${project.id}`
                        }}
                      </span>
                    </div>
                    <h3 class="article-title text-balance">
                      {{ project.title }}
                    </h3>
                    <p class="article-description leading-relaxed">
                      {{ project.fullText || project.description }}
                    </p>
                    <button
                      class="btn btn-primary gallery-btn"
                      @click="viewProjectGallery(project.id)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="btn-icon"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      {{ isArabic ? "عرض معرض الصور" : "View Image Gallery" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced gallery modal with improved transitions and layout -->
    <Transition name="gallery-fade">
      <div v-if="showGallery" class="gallery-modal" @click.self="closeGallery">
        <div class="gallery-wrapper">
          <button
            class="gallery-close-btn"
            @click="closeGallery"
            :title="isArabic ? 'إغلاق' : 'Close'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="gallery-content">
            <button
              v-if="currentImageIndex > 0"
              class="gallery-nav-btn prev"
              @click="previousImage"
              :title="isArabic ? 'السابق' : 'Previous'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div class="gallery-image-container">
              <Transition name="image-fade" mode="out-in">
                <img
                  :key="currentImageIndex"
                  :src="currentGalleryImages[currentImageIndex]"
                  :alt="`Project ${selectedProjectId} - Image ${
                    currentImageIndex + 1
                  }`"
                  class="gallery-image"
                />
              </Transition>
              <div class="image-info">
                <span class="image-counter">
                  {{ currentImageIndex + 1 }} /
                  {{ currentGalleryImages.length }}
                </span>
              </div>
            </div>

            <button
              v-if="currentImageIndex < currentGalleryImages.length - 1"
              class="gallery-nav-btn next"
              @click="nextImage"
              :title="isArabic ? 'التالي' : 'Next'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div class="gallery-thumbnails">
            <div
              v-for="(img, idx) in currentGalleryImages"
              :key="idx"
              class="thumbnail-item"
              :class="{ active: idx === currentImageIndex }"
              @click="currentImageIndex = idx"
            >
              <img
                :src="img"
                :alt="`Thumbnail ${idx + 1}`"
                class="thumbnail-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Strategic Goals Section -->
    <section class="bg-muted">
      <div class="container">
        <h2 class="section-title animate-fade-in">
          {{
            isArabic
              ? "الأهداف الاستراتيجية المتكاملة لسند"
              : "SANAD's Integrated Strategic Goals"
          }}
        </h2>
        <p class="section-description animate-fade-in">
          {{
            isArabic
              ? "تلتزم الهيئة بشبكة شاملة من الأهداف الاستراتيجية"
              : "The Authority is committed to a comprehensive safety net of strategic objectives"
          }}
        </p>
        <div class="row g-4">
          <div
            v-for="(goal, index) in strategicGoals"
            :key="index"
            class="col-md-6"
          >
            <div
              class="card h-100 card-hover-lift animate-slide-up"
              :style="`animation-delay: ${index * 0.1}s`"
            >
              <div class="card-body p-4">
                <h5 class="card-title fw-bold mb-3">{{ goal.title }}</h5>
                <p class="card-text text-muted leading-relaxed">
                  {{ goal.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-spacing">
      <AppFooter />
    </div>
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
const { currentLanguage, isArabic } = useLanguageStore();
// biome-ignore lint/correctness/useHookAtTopLevel: False positive - hooks are at top level
const t = computed(() => translations[currentLanguage.value]);

const showGallery = ref(false);
const selectedProjectId = ref(null);
const currentImageIndex = ref(0);

const projectImages = {
  1: [
    "/image/project1/2.jpeg",
    "/image/project1/3.jpeg",
    "/image/project1/4.jpeg",
    "/image/project1/5.jpeg",
    "/image/project1/1.jpeg",
  ],
  2: [
    "/image/project2/1.jpeg",
    "/image/project2/2.jpeg",
    "/image/project2/3.jpeg",
    "/image/project2/4.jpeg",
    "/image/project2/5.jpeg",
    "/image/project2/6.jpeg",
  ],
  3: [
    "/image/project3/2.jpeg",
    "/image/project3/1.jpeg",
    "/image/project3/3.jpeg",
  ],
  4: [
    "/image/project4/7.jpeg",
    "/image/project4/1.jpeg",
    "/image/project4/2.jpeg",
    "/image/project4/3.jpeg",
    "/image/project4/4.jpeg",
    "/image/project4/5.jpeg",
    "/image/project4/6.jpeg",
  ],
  5: [
    "/image/project5/4.jpeg",
    "/image/project5/1.jpeg",
    "/image/project5/2.jpeg",
    "/image/project5/3.jpeg",
    "/image/project5/5.jpeg",
    "/image/project5/6.jpeg",
  ],
  6: [
    "/image/project6/1.jpeg",
    "/image/project6/2.jpeg",
    "/image/project6/3.jpeg",
    "/image/project6/4.jpeg",
    "/image/project6/5.jpeg",
    "/image/project6/6.jpeg",
    "/image/project6/7.jpeg",
    "/image/project6/8.jpeg",
  ],
  7: [
    "/image/project7/1.jpeg",
    "/image/project7/2.jpeg",
    "/image/project7/3.jpeg",
    "/image/project7/4.jpeg",
    "/image/project7/5.jpeg",
    "/image/project7/6.jpeg",
    "/image/project7/7.jpeg",
    "/image/project7/8.jpeg",
  ],
  8: [
    "/image/project8/2.jpeg",
    "/image/project8/1.jpeg",
    "/image/project8/3.jpeg",
    "/image/project8/4.jpeg",
    "/image/project8/5.jpeg",
    "/image/project8/6.jpeg",
    "/image/project8/7.jpeg",
    "/image/project8/8.jpeg",
    "/image/project8/9.jpeg",
    "/image/project8/10.jpeg",
    "/image/project8/11.jpeg",
    "/image/project8/12.jpeg",
  ],
  9: ["/image/project3/3.jpeg"],
};

const currentGalleryImages = computed(() => {
  return projectImages[selectedProjectId.value] || [];
});

const getProjectMainImage = (projectId) => {
  const images = projectImages[projectId];
  return images && images.length > 0
    ? images[0]
    : "/placeholder.svg?height=300&width=400";
};

const viewProjectGallery = (projectId) => {
  selectedProjectId.value = projectId;
  currentImageIndex.value = 0;
  showGallery.value = true;
  document.body.style.overflow = "hidden";
};

const closeGallery = () => {
  showGallery.value = false;
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  if (currentImageIndex.value < currentGalleryImages.value.length - 1) {
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const strategicGoals = computed(() => {
  if (isArabic.value) {
    return [
      {
        title: "الإغاثة الطارئة",
        description: "تقديم الدعم العاجل للمتضررين أثناء وبعد الأزمات والحروب.",
      },
      {
        title: "التنمية المستدامة",
        description:
          "تنفيذ مشاريع تعليمية وتنموية تعزز الاعتماد على الذات وتقلل التبعية.",
      },
      {
        title: "التمكين والدعم",
        description:
          "تقديم التوجيه النفسي والتعليمي والقانوني للضحايا، مع التركيز على الفئات الضعيفة.",
      },
      {
        title: "حقوق الإنسان والمناصرة",
        description:
          "توثيق الانتهاكات وتعزيز حقوق الإنسان والحقوق المدنية للفلسطينيين.",
      },
      {
        title: "الشراكات العالمية",
        description:
          "بناء شراكات محلية وإقليمية ودولية ودعم المبادرات الشعبية داخل غزة.",
      },
    ];
  }

  return [
    {
      title: "Emergency Relief",
      description:
        "Providing urgent support to those affected during and after crises and wars.",
    },
    {
      title: "Sustainable Development",
      description:
        "Implementing educational and developmental projects that promote self-reliance and reduce dependency.",
    },
    {
      title: "Empowerment & Support",
      description:
        "Offering psychological, instructional, and legal guidance to victims, with a focus on vulnerable groups.",
    },
    {
      title: "Human Rights & Advocacy",
      description:
        "Documenting violations and promoting the human and civil rights of Palestinians, while raising global awareness of Gaza's suffering through media and effective advocacy.",
    },
    {
      title: "Global Partnerships",
      description:
        "Building local, regional, and international partnerships while supporting grassroots initiatives within Gaza.",
    },
  ];
});

const handleImageError = (event) => {
  event.target.src = "/placeholder.svg?height=300&width=400";
};
</script>

<style scoped>
/* Enhanced article card styles with improved image display */
.article-card {
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: none;
}
.footer-spacing {
  padding-top: 120px;
  background-color: #f5f7fa; /* نفس لون الصفحة */
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.article-card-row {
  min-height: auto;
}

.article-image-container {
  position: relative;
  height: 320px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover .article-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
}

.article-card:hover .image-overlay {
  opacity: 1;
}

.overlay-badge {
  background: rgba(255, 255, 255, 0.95);
  color: #667eea;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.article-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.project-header {
  margin-bottom: 1.25rem;
}

.project-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

.article-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1.25rem;
  line-height: 1.3;
}

.article-description {
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.gallery-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  align-self: flex-start;
}

.gallery-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.gallery-btn:hover .btn-icon {
  transform: scale(1.1);
}

/* Enhanced gallery modal with modern design */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.97);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.gallery-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.gallery-close-btn {
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  z-index: 10001;
  backdrop-filter: blur(10px);
}

.gallery-close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.gallery-content {
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.gallery-image-container {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.gallery-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.image-info {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 15px;
}

.image-counter {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gallery-nav-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  flex-shrink: 0;
}

.gallery-nav-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.gallery-nav-btn:active {
  transform: scale(0.95);
}

.gallery-thumbnails {
  display: flex;
  gap: 12px;
  margin-top: 30px;
  overflow-x: auto;
  padding: 15px 0;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.gallery-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.gallery-thumbnails::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.gallery-thumbnails::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.thumbnail-item {
  min-width: 90px;
  width: 90px;
  height: 90px;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.thumbnail-item:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.5);
}

.thumbnail-item.active {
  border-color: #667eea;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
  transform: translateY(-4px);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Added smooth transitions for gallery */
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.3s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}

.image-fade-enter-active {
  transition: all 0.4s ease;
}

.image-fade-leave-active {
  transition: all 0.3s ease;
}

.image-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.image-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .article-card-row {
    min-height: auto;
  }

  .article-image-container {
    height: 250px;
  }

  .article-content {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.5rem;
  }

  .gallery-image-container {
    height: calc(100vh - 250px);
  }

  .gallery-thumbnails {
    gap: 8px;
  }

  .thumbnail-item {
    min-width: 70px;
    width: 70px;
    height: 70px;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .article-image-container {
    height: 280px;
  }
}
</style>
