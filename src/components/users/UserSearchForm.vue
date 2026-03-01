<script setup lang="ts">
import { useForm } from '@/composables/useForm'

interface QueryParams {
  name_like: string
}

const defaultValue = {
  name_like: '',
}
const modelValue = defineModel<QueryParams>()

const { form, handleSubmit } = useForm<QueryParams>(defaultValue, modelValue)
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="user-search">search user by name</label>
      <input
        id="user-search"
        name="queryName"
        type="search"
        autocomplete="off"
        v-model="form.name_like"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
<style scoped></style>
