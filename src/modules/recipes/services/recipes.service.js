
import { database } from '@/db'
import utils from '@/utils';

// listRecipes

export default {
  name: 'RecipesService',
  listRecipes(status) {
    let options = {
      collection: 'Recipes',
      status: status || ''
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
      collection: 'Recipes',
      item: {
        id: utils.uuid(),
        code: recipe.code,
        title: recipe.title,
        person_id: recipe.person_id
      }
    }
    return database.create(options).then(
      function (data) {
        return {};
      },
      function (err) {
        throw err;
      }
    )
  },
  getRecipe(id) {
    let options = {
      collection: 'Recipes',
      id: id
    }
    return database.get(options).then(
      function (data) {
        return data;
      },
      function (err) {
        throw err;
      }
    )
  },
  updateRecipe(recipe) {
    let options = {
      collection: 'Recipes',
      item: {
        id: recipe.id,
        code: recipe.code,
        title: recipe.title,
        person_id: recipe.person_id
      }
    }
    return database.update(options).then(
      function (data) {
        return {};
      },
      function (err) {
        throw err;
      }
    )
  },
  archiveRecipe(recipe) {
    let options = {
      collection: 'Recipes',
      item: {
        id: recipe.id,
        person_id: recipe.person_id
      }
    }
    return database.archive(options).then(
      function (data) {
        return {};
      },
      function (err) {
        throw err;
      }
    )
  },
}
