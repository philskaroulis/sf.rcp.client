<template>
  <div class="new-recipe">

    <h1>New Recipe</h1>

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

    <button class="btn btn-link">Cancel</button>
    &nbsp; <button @click="saveAndAddAnother" class="btn btn-secondary btn-lg">Save &amp; add another</button>
    &nbsp; <button @click="save" class="btn btn-primary btn-lg">Save</button>

  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeForm from '../components/RecipeForm.component.vue';

  import { mapGetters } from 'vuex';

  export default {
    name: 'NewRecipe',
    components: {
      RecipeForm,
    },
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'loading', 'error' ])
    },
    methods: {
      save() {
        this.$store.dispatch('createRecipe')
        this.$router.push({ name: 'ListRecipes' })
      },
      saveAndAddAnother() {
        this.$store.dispatch('createRecipe')
      }
    }
  };

</script>
