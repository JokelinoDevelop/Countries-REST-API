import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/Main.vue'
import CountryView from '@/views/CountryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },

    {
      path: '/country/:alpha3Code',
      name: 'CountryView',
      component: CountryView
    }
  ]
})

export default router
