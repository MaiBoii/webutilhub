import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import QrGenerator from '../views/QrGenerator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/qr', component: QrGenerator},
  { path: '/stats', component: Stats },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
