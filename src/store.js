import Vue from 'vue';
import Vuex from 'vuex';
import messagesStore from './store/messages';
import authenticationStore from './store/authentication';
import recipeStore from './store/recipe';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages: messagesStore,
    recipe: authenticationStore,
    authetication: recipeStore
  }
});
