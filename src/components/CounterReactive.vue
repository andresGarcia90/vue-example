<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

</script>

<template>
  <p>Counter made by Reactive</p>
  <button @click="state.count++">{{ state.count }}</button>
</template>
