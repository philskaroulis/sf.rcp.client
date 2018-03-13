<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name:'ListRecipes'}">Recipes</router-link>
    </div>
    <!-- message board -->
    <div class="application-messages" v-for="m in messages">
      <div class="application-message">
        <div class="msg-title">{{ m.title }}</div>
        <div class="msg-body">{{ m.body }}</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'VueApplication',
    computed: {
      // use es6 spreader to take the mapped functions
      // & turn them to object member functions
      ...mapGetters([ 'messages' ])
    },
    created () {
      // call the state mutation 'updateAuthentication'
      this.$store.commit('updateAuthentication', {
        status: 'unauthenticated',
        user: {}
      });
    },
    mounted() {
      // call the state mutation 'displayMessage'
      this.$store.commit('displayMessage', {
        clear: true,
        message: {
          title: 'Greetings',
          body: 'Welcome to Safe Recipes.',
        }
      });
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.application-messages {
  background: #F9F9F9;
  border: 1px dotted #CCC;
}
.application-messages .msg-title {
  font-weight: bold;
}
</style>
