import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import LoginLayout from "@/layouts/LoginLayout.vue";
import Home from "@/views/Home.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Страница авторизации',
      layout: LoginLayout
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      layout: MainLayout
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
