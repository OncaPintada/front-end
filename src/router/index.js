import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/analise',
    name: 'Análise Modelos',
    component: () => import('../views/AnaliseModelo.vue')
  },
  {
    path: '/prevencao',
    name: 'Prevenção',
    component: () => import('../views/PrevencaoFraude.vue')
  },
  {
    path: '/ideia',
    name: 'Ideia de Negócio',
    component: () => import('../views/IdeiaNegocio.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
