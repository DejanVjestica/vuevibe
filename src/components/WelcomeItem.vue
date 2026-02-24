<script setup lang="ts">
interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

import { onMounted, ref } from 'vue'
import PageHero from './TheHero.vue'
import hero1x from '@/assets/images/consult-hero@1x.jpg'
import hero2x from '@/assets/images/consult-hero@1x.jpg'
const newTask = ref(['test'])

const addTask = () => {
  console.log(newTask.value)
}

onMounted(async () => {
  // console.log(newTask.value)
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()

    newTask.value = data.map((task: Todo) => {
      // console.log(task)
      return task.title
    })
    // console.log(newTask.value)
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <PageHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Let us help you</h1>
  </PageHero>
  <h1>schedule-a-consult</h1>
  <form @submit.prevent="addTask">
    <label for="newEmail">newTask</label>
    <input type="email" name="newEmail" id="newEmail" v-model="newTask" />
    <button @submit="addTask">submit</button>
    <input />
  </form>
</template>
<style scoped>
.heading-h1 {
  font-size: 4.2rem;
}
@media (min-width: 768px) {
  .heading-h1 {
    font-size: var(--display-3);
  }
}
@media (min-width: 1260px) {
  .heading-h1 {
    font-size: var(--hero-display);
  }
}
</style>
