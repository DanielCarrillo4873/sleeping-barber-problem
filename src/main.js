import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/index.js';

import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


createApp(App).use(store).mount('#app')
