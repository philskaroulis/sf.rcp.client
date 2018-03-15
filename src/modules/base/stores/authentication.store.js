export default {
  state: {
    authetication: {}
  },
  getters: {
    autheticationStatus(state) {
      return state.authetication.status;
    },
    autheticatedUser(state) {
      return state.authetication.user;
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    updateAuthentication(state, mutation) {
      state.authetication = {
        status: mutation.status,
        user: mutation.user
      }
    }
  },
  // asynch mutations called using this.$store.dispatch(type,mutation)
  actions: {

  },
}
