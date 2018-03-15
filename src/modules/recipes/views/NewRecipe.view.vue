<template>
  <div class="new-recipe">
    <h1>New Recipe</h1>
    <RecipeForm/>
  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeForm from '../components/RecipeForm.component.vue';

  export default {
    name: 'NewRecipe',
    components: {
      RecipeForm,
    },
  };

</script>
