<template>
  <div class="recipes">
    <h1>Recipes</h1>
    <RecipeList/>
  </div>
</template>

<script>

  // note: @ is an alias to /src
  import RecipeList from '@/components/RecipeList.vue';

  export default {
    name: 'Recipes',
    components: {
      RecipeList,
    },
  };

</script>
