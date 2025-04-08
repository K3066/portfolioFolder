import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundFolder from "@/views/NotFoundFolder.vue";
import BaseRouterVue from "@/components/BaseRouterVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: BaseRouterVue,
      children: [
        {path: '', name: 'portfolioRedirect', redirect: {name: "portfolioPage"}},
        {path: 'portfolio', name: "portfolioPage", component: HomeView},
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: "/not-found", name: "notFound", component: NotFoundFolder
    },
    {
      path: "/:pathMatch(.*)*", redirect: {name: "notFound"}
    }
  ],
})

export default router
