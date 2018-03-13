<template>
    <div class="recipe-list">

        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div>
            <router-link :to="{ name: 'NewRecipe'}"> [ New Recipe ]</router-link>
        </div>

        <div v-if="recipes.length" class="content">
            <table>
                <thead>
                <tr>
                    <th>recipeId</th>
                    <th>title</th>
                    <th>status</th>
                    <th>internalCode</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="r in recipes">
                    <td><router-link :to="{ name: 'DisplayRecipe', params: { id: r.recipeId }}">{{ r.recipeId }}</router-link></td>
                    <td>{{ r.title }}</td>
                    <td>{{ r.status }}</td>
                    <td>{{ r.internalCode }}</td>
                    <td>
                        <router-link :to="{ name: 'EditRecipe', params: { id: r.recipeId }}"> [ Edit Recipe ]</router-link>
                        &nbsp;
                        <router-link :to="{ name: 'ArchiveRecipe', params: { id: r.recipeId }}"> [ Archive Recipe ]</router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

  import RecipeService from '@/services/recipes';
  import utils from '@/utils';

  export default {
    name: 'RecipeList',
    data () {
      return {
        loading: true,
        error: false,
        message: 'not updated',
        recipes: []
      }
    },
    created () {
      // fetch the data when the view is created
      // and the data is already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        let self = this;
        self.error = self.post = null
        self.loading = true
        RecipeService.listRecipes(self.onScan);
      },
      onScan(err, data) {
        let self = this;
        self.message = 'updated';
        self.loading = false
        if (err) {
          self.error = err.toString()
          console.error("Unable to scan the table. Error JSON:", utils.stringify(err));
        } else {
          console.log("Scan succeeded.");
          data.Items.forEach(function(itemdata) {
            // console.log("Item :", utils.stringify(itemdata));
            let marshalled = {
              "title": itemdata["title"]["S"],
              "recipeId": itemdata["recipeId"]["N"],
              "internalCode": itemdata["internalCode"]["S"],
              "authors": itemdata["authors"]["L"],
              "status": itemdata["status"]["S"]
            };
            self.recipes.push(marshalled);
          });
        }
      }
    }
  };
</script>

<!--  note: the "scoped" attribute limits CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    table {
        margin: 5px auto;
    }
    td {
        padding: 10px;
    }
    tbody tr {
        border: 1px dotted #ccc;
        background: white;
        padding: 10px;
    }
</style>
