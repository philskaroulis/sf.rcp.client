import Vue from 'vue';
import Router from 'vue-router';
import baseRoutes from '@/modules/base/routers/base.router';
import recipeRoutes from '@/modules/recipes/routers/recipes.router';

Vue.use(Router);

const routes = baseRoutes.concat(
  recipeRoutes
);

export default new Router({
  routes,
});
