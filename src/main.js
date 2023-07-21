import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import BarGraphImpor from '@/components/BarGraphImpor';

createApp(App).use(router).mount('#app')
const app = createApp({})
app.component('BarGraphImpor', BarGraphImpor);
