<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <p>Counter made by ref</p>
  <button @click="increment">{{ count }}</button>
</template>
