<template>
    <div class="recipe-display">
        This is a recipe
    </div>
</template>

<script>
  export default {
    name: 'RecipeDisplay',
    data () {
      return {
        loading: false,
        error: null
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
    table {
        margin: 5px auto;
    }
    td {
        padding: 10px;
    }
</style>
