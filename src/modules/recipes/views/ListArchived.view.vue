<template>
  <div class="recipes">
    <h1>Archived Recipes</h1>
    <RecipeList status="archived"/>
  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeList from '../components/RecipeList.component.vue';

  export default {
    name: 'Recipes',
    components: {
      RecipeList,
    },
  };

</script>
