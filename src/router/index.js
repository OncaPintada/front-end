import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/analise",
    name: "Análise Modelos",
    component: () => import("../views/AnaliseModelo.vue"),
  },
  {
    path: "/prevencao",
    name: "Prevenção",
    component: () => import("../views/PrevencaoFraude.vue"),
  },
  {
    path: "/ideia",
    name: "Ideia de Negócio",
    component: () => import("../views/IdeiaNegocio.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
