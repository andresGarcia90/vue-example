import { createMemoryHistory, createRouter } from 'vue-router'

import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Counter1Page from '@/counter/pages/Counter1Page.vue'

const routes = [
  { path: '/', component: Counter1Page },
  { path: '/about', component: HelloWorld },
  { path: '/counter-1', component: Counter1Page }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
