<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconPinia from './components/icons/IconPinia.vue'
</script>

<template>
  <header>
    <IconPinia />
    <div class="wrapper">
      <h3>Pinia - Ejercicios</h3>
      <nav>
        <RouterLink to="/">Counter Options</RouterLink>
        <RouterLink to="/counter-1">Counter Setups</RouterLink>
        <RouterLink to="/clients">Clients</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <!-- <main>
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
