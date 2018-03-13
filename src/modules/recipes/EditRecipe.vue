<template>
  <div class="edit-recipe">
    <h1>Recipe for {{ recipeId }}</h1>
    <RecipeForm/>
  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeForm from '@/components/RecipeForm.vue';

  export default {
    name: 'EditRecipe',
    components: {
      RecipeForm,
    },
    computed: {
      recipeId () {
        return this.$route.params.id
      }
    },
  };

</script>
