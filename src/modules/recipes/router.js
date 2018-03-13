/*
---------------------  --------------  --------------------------------------------
HTTP Verb & Path       View Name       Used for
---------------------  --------------  --------------------------------------------
GET /recipes           ListRecipes     a list of all recipes
GET /recipes/new       NewRecipe       an HTML form for creating a new recipe
POST /recipes          CreateRecipe    create a new recipe
GET /recipes/:id       DisplayRecipe   display a specific recipe
GET /recipes/:id/edit  EditRecipe      an HTML form for editing a recipe
PUT /recipes/:id       UpdateRecipes	 update a specific recipe
DELETE /recipes/:id    ArchiveRecipe   delete a specific recipe
---------------------  --------------  --------------------------------------------
*/

import ListRecipes from './ListRecipes.vue';
import DisplayRecipe from './DisplayRecipe.vue';
import NewRecipe from './NewRecipe.vue';
import EditRecipe from './EditRecipe.vue';
import ArchiveRecipe from './ArchiveRecipe.vue';

export default [
  {
    path: '/recipes/list',
    name: 'ListRecipes',
    component: ListRecipes,
  },
  {
    path: '/recipes/new',
    name: 'NewRecipe',
    component: NewRecipe,
  },
  {
    path: '/recipes/display/:id',
    name: 'DisplayRecipe',
    component: DisplayRecipe,
  },
  {
    path: '/recipes/edit/:id',
    name: 'EditRecipe',
    component: EditRecipe,
  },
  {
    path: '/recipes/archive/:id',
    name: 'ArchiveRecipe',
    component: ArchiveRecipe,
  },
];