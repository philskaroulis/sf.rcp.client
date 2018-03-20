
export default {
  state: {
    loading: false
  },
  getters: {
    loading(state) {
      return state.loading
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    loading(state, mutation) {
      state.loading = mutation
    }
  }
}
