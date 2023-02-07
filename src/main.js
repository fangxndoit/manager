import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
// import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(ElementPlus)
app.use(router)

app.mount('#app')
