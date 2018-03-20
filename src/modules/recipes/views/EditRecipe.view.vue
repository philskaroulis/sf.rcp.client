<template>
  <div class="edit-recipe">

    <h1>Recipe for {{ recipe.code }}</h1>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ message }}
    </div>

    <div class="columns">
      <div class="column col-12">
        <RecipeForm/>
      </div>
    </div>

    <button @click="cancel" class="btn btn-link">Cancel</button>
    &nbsp; <button @click="save" class="btn btn-primary btn-lg">Save</button>

  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeForm from '../components/RecipeForm.component.vue';

  import { mapGetters } from 'vuex';

  export default {
    name: 'EditRecipe',
    components: {
      RecipeForm,
    },
    created () {
      // fetch the data when the view is created
      // and the data is already being observed
      this.fetchData();
    },
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'loading', 'error', 'recipe' ])
    },
    methods: {
      fetchData() {
        this.$store.dispatch('getRecipe', this.$route.params.id )
      },
      save() {
        this.$store.commit('updateRecipeAuthor', '40508ede-ad1b-4559-9b2b-444b3f875bbe')
        this.$store.dispatch('updateRecipe')
        this.$store.commit('clearRecipe')
        this.$router.push({ name: 'ListRecipes' })
      },
      cancel() {
        this.$router.push({ name: 'ListRecipes' })
      },
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    }

  };

</script>
