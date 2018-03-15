import RecipesService from '../services/recipes.service'

export default {
  state: {
    loading: true,
    error: false,
    message: '',
    recipes: [],
    recipe: {}
  },
  getters: {
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    },
    message(state) {
      return state.message
    },
    recipes(state) {
      return state.recipes
    },
    recipe(state) {
      return state.recipe
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    updateRecipesList(state, mutation) {
      state.recipes.length = 0
      state.recipes = state.recipes.concat(mutation)
      console.info('mutation',mutation)
    },
    updateCurrentRecipe(state, mutation) {
      state.recipe = mutation
    },
    actionInit(state){
      state.error = false
      state.loading = true
    },
    actionSuccess(state,mutation) {
      console.log(mutation)
      state.loading = false
      state.error = false
      state.message = mutation
    },
    actionError(state,mutation) {
      console.error('Oh oh.', mutation)
      state.loading = false
      state.error = true
      state.message = mutation.toString()
    }
  },
  // asynch mutations called using this.$store.dispatch(type,mutation)
  actions: {
    listRecipes({commit}) {
      commit('actionInit')
      RecipesService.listRecipes().then(function(data) {
        commit('updateRecipesList', data)
        commit('actionSuccess', 'listRecipes success')
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
  },
}
