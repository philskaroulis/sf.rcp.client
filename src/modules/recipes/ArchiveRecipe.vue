<template>
  <div class="archive-recipe">
    <h1>Are you sure you want to archive Recipe #{{ recipeId }}</h1>
  </div>
</template>

<script>

  export default {
    name: 'ArchiveRecipe',
    computed: {
      recipeId () {
        return this.$route.params.id
      }
    },
  };

</script>
