
import { database } from '@/db'
import utils from '@/utils';

// listRecipes

export default {
  name: 'RecipesService',
  listRecipes() {
    let options = {
      tableName: 'Recipes'
    }
    return database.list(options).then(
      function (data) {
        return [].concat(data);
      },
      function (err) {
        throw err;
      }
    )
  },
  createRecipe(recipe) {
    let options = {
      tableName: 'Recipes',
      item:{
        "recipeId": utils.uuid(),
        "title": recipe.title,
        "internalCode": recipe.internalCode
      }
    }
    return database.create(options).then(
      function (data) {
        console.info('data',data)
        return {};
      },
      function (err) {
        throw err;
      }
    )
  }
}
