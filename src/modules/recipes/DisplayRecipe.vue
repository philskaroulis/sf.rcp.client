<template>
  <div class="display-recipe">
    <h1>Recipe for {{ recipeId }}</h1>
    <RecipeDisplay/>
  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeDisplay from '@/components/RecipeDisplay.vue';

  export default {
    name: 'DisplayRecipe',
    components: {
      RecipeDisplay,
    },
    computed: {
      recipeId () {
        return this.$route.params.id
      }
    },
  };

</script>
