<script setup lang="ts">
import { useForm } from '@/composables/useForm'

interface Credentials {
  email: string
  password: string
}

defineProps<{
  isLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'submitForm'): void
}>()

const modelValue = defineModel<Credentials>()

const { formData, errors, handleSubmit } = useForm<Credentials>(
  {
    email: '',
    password: '',
  },
  modelValue,
  (values: Credentials) => {
    const errs: Partial<Record<keyof Credentials, string>> = {}
    if (!values.email) errs.email = 'Email is required'
    if (values.password.length < 6) errs.password = 'Password is too short! Min 6 Caracters'
    return errs
  },
  () => emit('submitForm'),
)
</script>
<template>
  <form class="user-login-form" @submit.prevent="handleSubmit">
    <div>
      <label for="user-email">Email address</label>
      <input
        id="user-email"
        name="email"
        type="email"
        autocomplete="off"
        v-model="formData.email"
      />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div>
      <label for="user-password">Password</label>
      <input
        id="user-password"
        name="password"
        type="password"
        autocomplete="off"
        v-model="formData.password"
      />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    <button type="submit" :disabled="isLoading">
      {{ isLoading ? 'Processing...' : 'Submit' }}
    </button>
  </form>
</template>
<style scoped>
.user-login-form {
  flex-direction: column;
  gap: 3rem;

  > div > span {
    color: var(--vv-danger);
  }
}
</style>
