import RecipesService from '../services/recipes.service'

const blankRecipe = {
  id: '',
  code: '',
  title: '',
  status: '',
  person_id: ''
}

export default {
  state: {
    recipes: [],
    recipe: blankRecipe
  },
  getters: {
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
    },
    clearRecipe(state) {
      state.recipe = blankRecipe
    },
    updateRecipe(state, mutation) {
      state.recipe = mutation
    },
    updateRecipeAuthor(state, mutation) {
      state.recipe.person_id = mutation
    },
    actionInit(state){
      state.error = false
      state.loading = true
    },
    actionSuccess(state,mutation) {
      // console.log(mutation)
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
    listRecipes({commit}, status) {
      status = status || '';
      commit('actionInit')
      RecipesService.listRecipes(status).then(function(data) {
        commit('updateRecipesList', data)
        commit('actionSuccess', 'listRecipes success')
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
    createRecipe({state, commit}, options) {
      options = options || {};
      options.clear = options.clear || true;
      commit('actionInit')
      RecipesService.createRecipe(state.recipe).then(function(data) {
        commit('actionSuccess', 'createRecipe success')
        if (options.clear) {
          commit('clearRecipe')
        }
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
    getRecipe({commit}, id) {
      commit('actionInit')
      RecipesService.getRecipe(id).then(function(data) {
        commit('updateRecipe', data)
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
    updateRecipe({state, commit}) {
      commit('actionInit')
      RecipesService.updateRecipe(state.recipe).then(function(data) {
        commit('actionSuccess', 'updateRecipe success')
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
    archiveRecipe({state, commit}, options) {
      commit('actionInit')
      RecipesService.archiveRecipe(options).then(function(data) {
        commit('actionSuccess', 'archiveRecipe success')
      }).catch(function(err) {
        commit('actionError', err)
      })
    },
  },
}
