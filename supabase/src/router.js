import { createRouter, createWebHistory } from 'vue-router'

import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import { useAuthStore } from './stores/auth'

const routes = [
    { 
        path: '/', 
        component: Home },
    {   path: '/signup', 
        component: SignUp },
    { 
        path: '/signin', 
        component: SignIn },
    { 
      path: '/welcome', 
      component: Welcome, 
      meta: { requiresAuth: true } 
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.matched.some(record => record.meta.requiresAuth) && !authStore.user) {
      next('/signin')
    } else {
      next()
    }
  })

export default router