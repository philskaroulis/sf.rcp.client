<template>
  <header class="navbar">
    <section class="navbar-section">
      <router-link to="/" class="navbar-brand mr-2">Home</router-link> |
      <router-link to="/about" class="btn btn-link">About</router-link> |
      <router-link :to="{name:'ListRecipes'}" class="btn btn-link">Recipes</router-link> |
      <router-link :to="{name:'ListArchived'}" class="btn btn-link">Archived</router-link>
    </section>
    <section class="navbar-section">
      <div class="input-group input-inline">
        <input class="form-input" type="text" placeholder="search">
        <button class="btn btn-primary input-group-btn">Search</button>
      </div>
    </section>
  </header>
</template>

<script>
  export default {
    name: 'AppNavigation'
  }
</script>

<style scoped>

</style>