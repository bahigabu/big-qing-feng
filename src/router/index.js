import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/about',
      component: AboutView,
      children: [
        {
          path: 'profile',
          component: ProfileView,
          children: [
            {
              path: 'settings',
              component: SettingsView,
            },
          ],
        },
      ],
    },
  ],
})

export default router
