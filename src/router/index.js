import AppVue from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: history,
  scrollBehavior(to) {    
    return {
      el: to.hash
    }
  },
  routes: [
    { path: '/', component: AppVue }
  ],
})



export default router
