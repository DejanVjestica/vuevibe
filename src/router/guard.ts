import { type Router } from 'vue-router'
import { useAuthStore } from '@/features/auth/store/authStore'

export function setupRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()

    if (!authStore.isInitialised) {
      await authStore.init()
    }

    const isLoggedIn = !!authStore.user

    if (to.meta.guestOnly && isLoggedIn) {
      return next('/')
    }

    if (to.meta.requiresAuth && !isLoggedIn) {
      return next({ name: 'login' })
    }

    next()
  })
}
