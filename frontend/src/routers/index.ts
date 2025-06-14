import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QrGenerator from '../components/QRgenerator.vue'
import Base64Tool from '../components/Base64Tool.vue'
import UUID from '../components/uuid.vue'
import Lorem from '../components/Lorem.vue'
import IpChecker from '../components/IpChecker.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/qr', component: QrGenerator},
  { path: '/base64', component: Base64Tool },
  { path: '/uuid', component: UUID },
  { path: '/Lorem', component: Lorem },
  { path: '/Ipchecker', component: IpChecker },

]

const router = createRouter({
  history: createWebHistory('/webutilhub'),  // ← 여기 베이스 경로 추가 (중요!)
  routes
})

export default router
