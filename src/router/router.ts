import { createWebHistory, createRouter } from 'vue-router'

import ServicesView from '../views/ServicesView.vue'
import HomeView from '../views/HomeView.vue'
import ConsultView from '../views/ConsultView.vue'
import UserLogin from '../features/auth/views/UserLogin.vue'
import UserRegister from '../features/auth/views/UserRegister.vue'
import { setupRouterGuards } from './guard'

const routes = [
  { path: '/', component: HomeView },
  { path: '/services', component: ServicesView },
  { path: '/consult', component: ConsultView },
  { path: '/auth/login', component: UserLogin, meta: { plainLayout: true, guestOnly: true } },
  { path: '/auth/register', component: UserRegister, meta: { plainLayout: true, guestOnly: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

setupRouterGuards(router)

export default router
