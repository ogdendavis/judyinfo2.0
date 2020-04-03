import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/Intro';
import Answers from '@/components/Answers';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Intro,
    },
    {
      path: '/ask/:q',
      name: 'Query',
      component: Answers
    }
  ],
});
