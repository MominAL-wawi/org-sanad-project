import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ArticlesPage from "../views/ArticlesPage.vue";
import ContactPage from "../views/ContactPage.vue";
import DonatePage from "../views/DonatePage.vue";
import LegalStatusPage from "../views/LegalStatusPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/legal-status",
    name: "legal-status",
    component: LegalStatusPage,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesPage,
  },

  {
    path: "/donate",
    name: "donate",
    component: DonatePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
