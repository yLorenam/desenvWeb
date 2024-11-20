import { createRouter, createWebHistory } from 'vue-router';
import Avaliacao from '../components/AvaliarFIlme.vue';
import Filmes from '../components/FilmesAvaliados.vue';
import Login from '../components/Login.vue';
import dashboard from '@/components/dashboard.vue';

const routes = [
  {path: '/', component: Login},
  {
    path: "/dashboard",
    component: dashboard,
    children: [
      {
        path: "Avaliacao",
        component: Avaliacao,
      },
      {
        path: "Filmes",
        component: Filmes,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/'); 
  } else {
    next();
  }
});

export default router;