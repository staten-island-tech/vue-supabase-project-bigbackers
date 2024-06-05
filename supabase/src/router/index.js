import { supabase } from '../supabase'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import CreateAcc from '../views/Create.vue'
import HomeBlog from '../views/HomeBlog.vue'


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
    name: 'Login',
    component: Login
  },
  {
    path: '/homeblog',
    component: HomeBlog
  },
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

