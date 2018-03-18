<template>
    <div class="recipe-form">
        <div class="form-container">
            <form>
                <div class="form-group">
                    <label class="form-label" for="recipe-title">Title</label>
                    <input v-model.lazy.trim="recipe.title" class="form-input" type="text" id="recipe-title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label class="form-label" for="recipe-internal-code">Internal Code</label>
                    <input v-model.lazy.trim="recipe.internalCode" class="form-input" type="text" id="recipe-internal-code" placeholder="Internal Code">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    name: 'RecipeForm',
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'recipe' ])
    },
  };

</script>

<!--  note: the "scoped" attribute limits CSS to this component only -->
<style scoped>
    .form-container {
        margin: 5px auto;
        width: 50%;
        border-radius: .1rem;
        padding: 1rem 0.5rem;
        text-align: left;
    }
    label {
        font-weight: bolder;
        font-size: large;
    }
</style>
