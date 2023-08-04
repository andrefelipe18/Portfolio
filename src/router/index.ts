import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [     
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/WorkSpace.vue'),
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('@/components/about/About.vue')
        }
      ]
    } 
  ]
})

export default router
