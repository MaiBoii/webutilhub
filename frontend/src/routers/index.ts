import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import QrGenerator from '../components/QRgenerator.vue'
import Base64Tool from '../components/Base64Tool.vue'
import UUID from '../components/uuid.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/qr', component: QrGenerator},
  { path: '/base64', component: Base64Tool },
  { path: '/uuid', component: UUID },
  { path: '/stats', component: Stats },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
