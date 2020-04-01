import Vue from 'vue';
import Router from 'vue-router';
import Ask from '@/components/Ask';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Ask
    }
  ],
});
