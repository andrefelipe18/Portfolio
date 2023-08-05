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
        },
        {
          path: '/resume',
          name: 'Resume',
          component: () => import('@/components/resume/Resume.vue')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('@/components/contact/Contact.vue')
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('@/components/projects/Projects.vue')
        }        
      ]
    } 
  ]
})

export default router
