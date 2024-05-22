import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GetStarted from '../components/GetStarted.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
