import utils from '@/utils';

export default {
  state: {
    messages: [],
  },
  getters: {
    messages(state) {
      return state.messages
    }
  },
  // synchronous mutations called using this.$store.commit(type,mutation)
  mutations: {
    displayMessage(state, mutation) {
      if (mutation.clear) {
        utils.emptyArray(state.messages)
      }
      state.messages.push(mutation.message)
    },
  },
  // asynch mutations called using this.$store.dispatch(type,mutation)
  actions: {

  },
}
