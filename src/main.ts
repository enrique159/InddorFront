import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueTablerIcons from "vue-tabler-icons";

import App from './App.vue'
import router from './router'

import '@/styles/fonts.css'
import '@/styles/main.scss'
import '@/styles/spacing.scss'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(VueTablerIcons)
app.use(router)

app.mount('#app')
