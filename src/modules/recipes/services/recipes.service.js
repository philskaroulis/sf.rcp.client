
import { database } from '@/db';

// listRecipes

export default {
  name: 'RecipesService',
  listRecipes() {
    let options = {
      tableName: 'Recipes'
    }
    return database.list(options).then(
      function (data) {
        let list = []
        data.Items.forEach(function(itemdata) {
          list.push({
            "title": itemdata["title"]["S"],
            "recipeId": itemdata["recipeId"]["N"],
            "internalCode": itemdata["internalCode"]["S"],
            "authors": itemdata["authors"]["L"],
            "status": itemdata["status"]["S"]
          })
        })
        return list
      },
      function (err) {
        throw err;
      }
    )
  }
}
