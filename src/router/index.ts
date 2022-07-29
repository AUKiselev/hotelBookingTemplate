import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "homeView",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "/search",
          name: "searchView",
          component: () => import("@/views/SearchView.vue"),
        },
        {
          path: "/details",
          name: "detailsView",
          component: () => import("@/views/DetailsView.vue"),
        },
        {
          path: "/form",
          name: "formView",
          component: () => import("@/views/FormView.vue"),
        },
      ],
    },
  ],
});

export default router;
