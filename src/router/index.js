import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Create from '@/views/Create.vue';
import VueBodyClass from 'vue-body-class';

Vue.use(Buefy);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { bodyClass: 'home' },
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next); });

export default router;
