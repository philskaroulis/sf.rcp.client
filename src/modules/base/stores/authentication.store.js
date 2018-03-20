export default {
  state: {
    authentication: {
      status: 'active',
      user: {
        person_id: ''
      }
    }
  },
  getters: {
    authenticationStatus(state) {
      return state.authentication.status;
    },
    authenticatedUser(state) {
      return state.authentication.user;
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    updateAuthentication(state, mutation) {
      state.authentication = {
        status: mutation.status,
        user: mutation.user
      }
    }
  },
  // asynch mutations called using this.$store.dispatch(type,mutation)
  actions: {

  },
}
