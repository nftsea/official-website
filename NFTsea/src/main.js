import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router.js'
import tronWeb from 'tronweb'
import axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// axios.defaults.baseURL = 'https://app.armourtraders.com/api/v1/'
// axios.defaults.baseURL = 'http://13.124.59.249:8088/api/v1/'
axios.defaults.baseURL = '/api/'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.tronweb = tronWeb
app.config.globalProperties.$http = axios
app.use(ElementPlus)
app.use(router).mount('#app')
