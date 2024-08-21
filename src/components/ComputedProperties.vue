<script setup>
import { ref, reactive, onUpdated } from 'vue'
const header = ref('Shopping List App')
const inputItem = ref('');
const items = reactive([
  { id: 1, label: 'Eggs' },
  { id: 2, label: 'Milk' },
  { id: 3, label: 'Flour' },
])

const onAddItem = (event) => {
  items.push({ id: items.length + 1, label: event.target.value })
  inputItem.value = '';
}

const count = ref(0)

onUpdated(() => {
  // text content should be the same as current `count.value`
  // console.log(document.getElementById('count').textContent)
  // console.log(items)
})
</script>

<template>
  <h1>{{ header }}</h1>
  <input v-model="inputItem" name="item" @keyup.enter="onAddItem" placeholder="Add new Item" />

  <ul>
    <li v-for="item in items" :key="item.id">{{ item.label }}</li>
  </ul>

  <button id="count" @click="count++">{{ count }}</button>
</template>