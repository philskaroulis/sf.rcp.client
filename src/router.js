import Vue from 'vue';
import Router from 'vue-router';
import baseRoutes from '@/modules/base/router';
import recipeRoutes from '@/modules/recipes/router';

Vue.use(Router);

const routes = baseRoutes.concat(
  recipeRoutes
);

export default new Router({
  routes,
});
