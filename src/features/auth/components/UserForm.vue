<script setup lang="ts">
import { useForm } from '@/composables/useForm'

defineProps<{
  isLoading: boolean
}>()

interface Credentials {
  email: string
  password: string
}

const modelValue = defineModel<Credentials>()

const { form, handleSubmit } = useForm<Credentials>(
  {
    email: '',
    password: '',
  },
  modelValue,
)
</script>
<template>
  <form class="user-login-form" @submit.prevent="handleSubmit">
    <div>
      <label for="user-email">Email address</label>
      <input id="user-email" name="email" type="email" autocomplete="off" v-model="form.email" />
    </div>
    <div>
      <label for="user-password">Password</label>
      <input
        id="user-password"
        name="password"
        type="password"
        autocomplete="off"
        v-model="form.password"
      />
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
}
</style>
