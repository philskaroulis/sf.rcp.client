/*
---------------------  --------------------  --------------  --------------------------------------------
HTTP Verb & Path       Vue Path              View Name       Used for
---------------------  --------------------  --------------------------------------------
GET /recipes           /recipes/list         ListRecipes     a list of all recipes
GET /recipes/new       /recipes/new          NewRecipe       an HTML form for creating a new recipe
POST /recipes          -                     -               create a new recipe
GET /recipes/:id       /recipes/display/:id  DisplayRecipe   display a specific recipe
GET /recipes/:id/edit  /recipes/:id/edit     EditRecipe      an HTML form for editing a recipe
PUT /recipes/:id       -                     -               update a specific recipe
DELETE /recipes/:id    /recipes/archive/:id  ArchiveRecipe   delete a specific recipe
---------------------  --------------------  --------------------------------------------
*/

import ListRecipes from '../views/ListRecipes.view.vue'
import ListArchived from '../views/ListArchived.view.vue'
import DisplayRecipe from '../views/DisplayRecipe.view.vue'
import NewRecipe from '../views/NewRecipe.view.vue'
import EditRecipe from '../views/EditRecipe.view.vue'
import ArchiveRecipe from '../views/ArchiveRecipe.view.vue'

export default [
  {
    path: '/recipes/list',
    name: 'ListRecipes',
    component: ListRecipes,
  },
  {
    path: '/recipes/list/archived',
    name: 'ListArchived',
    component: ListArchived,
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
]