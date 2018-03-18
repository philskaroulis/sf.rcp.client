import Vue from 'vue';
import Vuex from 'vuex';
import messagesStore from '@/modules/base/stores/messages.store';
import loadingStore from '@/modules/base/stores/loading.store';
import authenticationStore from '@/modules/base/stores/authentication.store';
import recipesStore from '@/modules/recipes/stores/recipes.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages: messagesStore,
    loading: loadingStore,
    authentication: authenticationStore,
    recipes: recipesStore
  }
});
