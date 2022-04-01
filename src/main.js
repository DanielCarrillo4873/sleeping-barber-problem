import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import store from '@/store/index.js';


createApp(App).use(store).mount('#app')
