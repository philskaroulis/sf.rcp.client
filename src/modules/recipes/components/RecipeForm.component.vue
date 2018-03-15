<template>
    <div class="recipe-form">

        <div class="form-container">
            <form>

                <label for="recipe-title">Title</label>
                <input v-model="recipe.title" placeholder="title" id="recipe-title">

                <label for="recipe-internal-code">Internal Code</label>
                <input v-model="recipe.internalCode" placeholder="internal code" id="recipe-internal-code">

                <input type="button" class="button" value="Create">
            </form>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'RecipeForm',
    data () {
      return {
        loading: false,
        error: null,
        recipe: {}
      }
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
    label {
        display: block;
        margin-top: 20px;
    }
</style>
