import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
export const useCounterSetupStore = defineStore('counterSetup', () => {
  const count = ref(0)
  const lastChange = ref()
  const incrementBy = (value) => {
    count.value += value
    lastChange.value = new Date()
  }

  const increment = () => incrementBy(1)

  return {
    count,
    lastChange,
    // Getters
    squareCount: computed(() => count.value * count.value),
    // Actions
    incrementBy,
    increment
  }
})
