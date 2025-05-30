import { defineStore } from 'pinia'
import { ref } from 'vue'

let TODO = []

export const useStore = defineStore('data', () => {
  const todoList = ref(TODO)

  return {
    todoList
  }
})