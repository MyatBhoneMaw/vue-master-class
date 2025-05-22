import { createRouter, createWebHistory } from 'vue-router'
import {routes} from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

/**
 * it very awsome
 * route is base on file-base-route such as nuxt route in vue
 * setup import { routes } from 'vue-router/auto-routes'
 * routes in createRoute object
 */





// routes: [
//   {
//     path : '/',
//     name : "Home",
//     component : HomeView
//   },
   /**
     * import callback function
     * it download  js to provide projects components for only this page 
     */
  // {
  //   path : '/projects',
  //   name : "Projects",
  //   component : () => import('@/views/ProjectsView.vue') 
  // },
  // {
  //   path : '/projects/:id',
  //   name : "SingleProjectView",
  //   component : () => import('@/views/SingleProjectView.vue')
  // },
  /**
   *path : '/:catchAll(.*)*',
    *path : '/projects:catchAll(.*)*',   this is for only projects
    * catchAll route and undefine route,
    * 404 not found
    * h() is support html from javascript 
   */
//   {
//     path : '/:catchAll(.*)*',
//     name : 'NotFound',
//     component : h('p', {style : 'color : red;'}, '404 Not Found')
//   }
// ],