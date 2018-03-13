export default {
  state: {
    recipe: {}
  },
  getters: {
    recipe(state) {
      return state.recipe;
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    updateCurrentRecipe(state, mutation) {
      state.recipe = mutation
    }
  },
  // asynch mutations called using this.$store.dispatch(type,mutation)
  actions: {

  },
}
