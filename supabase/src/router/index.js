import { supabase } from '../supabase'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import CreateAcc from '../views/Create.vue'
import Store from '../views/Store.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/createacc',
    component: CreateAcc
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/store',
    component: Store
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

