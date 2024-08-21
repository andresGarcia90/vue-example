<script setup>
import { storeToRefs } from 'pinia';
import userCounterOptionsStore from '../../store/counter-options';
const counterStore = userCounterOptionsStore();
const { count, squareCount, lastChanged } = storeToRefs(counterStore);

function incrementByAction(value) {
  counterStore.incrementBy(value);
}

function resetValueAction() {
  counterStore.$reset();
}

</script>

<template>
  <div>
    <h1>Pinna Options</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>
    <div>
      <button @click="incrementByAction(1)">+1</button>
      <button @click="incrementByAction(2)">+2</button>
      <button @click="incrementByAction(5)">+5</button>
      <button @click="resetValueAction">Reset</button>
    </div>
    <div>
      <p>The value is {{ count }}</p>
      <p>Last Change: {{ lastChanged }}</p>
    </div>
  </div>
</template>


<style scoped></style>