import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
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
      },
      {
        path : '/projects/:id',
        name : "SingleProjectView",
        component : () => import('@/views/SingleProjectView.vue')
      },
      /**
       *path : '/:catchAll(.*)*',
        *path : '/projects:catchAll(.*)*',   this is for only projects
        * catchAll route and undefine route,
        * 404 not found
        * h() is support html from javascript 
       */
      {
        path : '/:catchAll(.*)*',
        name : 'NotFound',
        component : h('p', {style : 'color : red;'}, '404 Not Found')
      }
  ],
})

export default router

