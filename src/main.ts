import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

import { ElButton } from 'element-plus'

app.use(ElButton)

// pinia 初始化
const store = createPinia()
app.use(store)

app.use(router)
app.mount('#app')
