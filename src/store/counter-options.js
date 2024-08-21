import { defineStore } from 'pinia'

const userCounterOptionsStore = defineStore('counterOptions', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      count: 0,
      lastChanged: undefined
    }
  },
  getters: {
    squareCount: (state) => state.count * state.count
  },
  actions: {
    incrementBy(value) {
      this.count += value
      this.lastChanged = new Date()
    },
    increment() {
      this.incrementBy(1)
    }
  }
})

export default userCounterOptionsStore
