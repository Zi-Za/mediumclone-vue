import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Article from '@/views/Article'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router