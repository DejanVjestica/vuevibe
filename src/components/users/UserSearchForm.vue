<script setup lang="ts">
import { useForm } from '@/composables/useForm'

interface Filters {
  name_like: string
}

const modelValue = defineModel<Filters>()

const { form, handleSubmit } = useForm<Filters>(
  {
    name_like: '',
  },
  modelValue,
)
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
