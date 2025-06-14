import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './routers'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(Toast, {
  position: 'bottom-right'
})