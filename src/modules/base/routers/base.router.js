
import Home from '../views/Home.view.vue';
import About from '../views/About.view.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
];
