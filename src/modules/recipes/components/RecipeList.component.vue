<template>
    <div class="recipe-list">

        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ message }}
        </div>

        <div>
            <router-link :to="{ name: 'NewRecipe'}"> [ New Recipe ]</router-link>
        </div>

        <div v-if="recipes.length" class="content">
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Recipe Code</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="r in recipes">
                    <td><router-link :to="{ name: 'DisplayRecipe', params: { id: r.id }}">{{ r.code }}</router-link></td>
                    <td>{{ r.title }}</td>
                    <td>{{ r.status }}</td>
                    <td>
                        <router-link :to="{ name: 'EditRecipe', params: { id: r.id }}">Edit</router-link>
                        &nbsp;
                        <router-link :to="{ name: 'ArchiveRecipe', params: { id: r.id }}">Archive</router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    name: 'RecipeList',
    data () {
      return {
      }
    },
    created () {
      // fetch the data when the view is created
      // and the data is already being observed
      this.fetchData();
    },
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'loading', 'error', 'message', 'recipes' ])
    },
    methods: {
      fetchData() {
        this.$store.dispatch('listRecipes');
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
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
