<script setup lang="ts">
import { ref } from 'vue'
import UserForm from '../components/UserForm.vue'
import { useAuthStore } from '@/features/auth/store/authStore'
import router from '@/router/router'

const authStore = useAuthStore()

const credentials = ref({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  await authStore.registerWithEmailAndPass(credentials.value.email, credentials.value.password)

  if (!authStore.error) {
    router.push('/')
  }
}
</script>
<template>
  <section class="register" aria-labelledby="register-title">
    <h2 id="register-title">Please Register</h2>
    <UserForm
      v-model="credentials"
      @submit.prevent="handleSubmit"
      :is-loading="authStore.loading"
    />

    <p v-if="authStore.error" class="error" role="alert">{{ authStore.error }}</p>
    <p v-if="authStore.loading" class="loading">Creating your account...</p>

    <span>Already have an account, please </span
    ><RouterLink to="/auth/login"><span>login</span></RouterLink>
  </section>
</template>
<style scoped>
.register {
  align-self: center;
  border-radius: 1rem;
  grid-column: content-s;
  justify-content: center;
  outline: 1px solid var(--color-background-2);
  padding: 5rem;
  place-self: center;
  width: 100%;

  > h2 {
    margin-block-end: 3rem;
  }

  > a {
    text-decoration: underline;
  }

  > .error {
    color: var(--vv-danger);
  }
}
</style>
