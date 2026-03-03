import { createWebHistory, createRouter } from 'vue-router'

import ServicesView from '../views/ServicesView.vue'
import HomeView from '../views/HomeView.vue'
import ConsultView from '../views/ConsultView.vue'
import LoginView from '../features/auth/views/LoginView.vue'
import RegisterView from '../features/auth/views/RegisterView.vue'
import { setupRouterGuards } from './guard'

const routes = [
  { path: '/', component: HomeView },
  { path: '/services', component: ServicesView },
  { path: '/consult', component: ConsultView },
  { path: '/auth/login', component: LoginView, meta: { plainLayout: true, guestOnly: true } },
  { path: '/auth/register', component: RegisterView, meta: { plainLayout: true, guestOnly: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

setupRouterGuards(router)

export default router
