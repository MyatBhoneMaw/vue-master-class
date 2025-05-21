import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path : '/',
        name : "Home",
        component : HomeView
      },
       /**
         * import callback function
         * it download  js to provide projects components for only this page 
         */
      {
        path : '/projects',
        name : "Projects",
        component : () => import('@/views/ProjectsView.vue') 
      }
  ],
})

export default router

