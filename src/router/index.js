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
      path: '/:country',
      name: 'CountryView',
      component: CountryView
      // beforeRouteEnter(to, from, next) {
      //   const store = useCountryStore()

      //   store.selectCountryByRoute(to.params.country)
      //   console.log(store.selectedCountry)
      //   next()
      // }
    }
  ]
})

export default router
