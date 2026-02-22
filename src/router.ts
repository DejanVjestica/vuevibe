import { createWebHistory, createRouter } from 'vue-router'

import ServicesView from './views/ServicesView.vue'
import HomeView from './views/HomeView.vue'
import ConsultView from './views/ConsultView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/Services', component: ServicesView },
  { path: '/Consult', component: ConsultView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
