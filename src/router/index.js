import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import GetStarted from '@/components/GetStarted.vue';
import AboutUs from '@/components/AboutUs.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/get-started', component: GetStarted },
  { path: '/about-us', component: AboutUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
