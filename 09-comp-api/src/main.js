import { createApp } from 'vue'
import App from './App.vue'
import Header from '@/components/Fixed/Header.vue'
import Loading from '@/components/Utility/Loading.vue'

const app = createApp(App)

/* Defining and registering global component */
app.component('app-header', Header)
app.component('app-loading', Loading)

app.mount('#app')
