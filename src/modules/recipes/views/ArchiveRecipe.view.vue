<template>
  <div class="archive-recipe">
    <h1>Are you sure you want to archive Recipe with Code {{ recipe.code }}</h1>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ message }}
    </div>

    <button @click="cancel" class="btn btn-link">Cancel</button>
    &nbsp; <button @click="archive" class="btn btn-primary btn-lg">Yes, archive it</button>

  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    name: 'ArchiveRecipe',
    created () {
      // fetch the data when the view is created
      // and the data is already being observed
      this.fetchData();
    },
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'loading', 'error', 'recipe' ])
    },
    methods: {
      fetchData() {
        this.$store.dispatch('getRecipe', this.$route.params.id )
      },
      archive() {
        this.$store.dispatch('archiveRecipe', {id: this.$route.params.id, person_id:'40508ede-ad1b-4559-9b2b-444b3f875bbe'})
        this.$store.commit('clearRecipe')
        this.$router.push({ name: 'ListRecipes' })
      },
      cancel() {
        this.$router.push({ name: 'ListRecipes' })
      },
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    }

  };

</script>
