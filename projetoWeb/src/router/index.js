import { createRouter, createWebHistory } from 'vue-router';
import Avaliacao from '../components/AvaliarFIlme.vue';
import Filmes from '../components/FilmesAvaliados.vue';

const routes = [
  { path: '/', component: Avaliacao },
  { path: '/FilmesAvaliados', component: Filmes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;