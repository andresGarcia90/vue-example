import { createMemoryHistory, createRouter } from 'vue-router'

import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Counter1Page from '@/counter/pages/Counter1Page.vue'
import ClientsLayout from '@/components/clients/layout/ClientsLayout.vue'
import ListPage from '@/components/clients/pages/ListPage.vue'
import ClientPage from '@/components/clients/pages/clientPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Counter1Page },
  { path: '/about', name: 'About', component: HelloWorld },
  { path: '/counter-1', name: 'Counter1', component: Counter1Page },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsLayout,
    redirect: { name: 'clients-list' },
    children: [
      { path: '/list', name: 'clients-list', component: ListPage },
      { path: '/clients:id', name: 'client-data', component: ClientPage }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
