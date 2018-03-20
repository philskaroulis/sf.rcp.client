<template>
  <div id="app">
    <div class="container">
      <!--&lt;!&ndash; message board &ndash;&gt;-->
      <!--<div class="application-messages" v-for="m in messages">-->
        <!--<div class="application-message">-->
          <!--<div class="msg-title">{{ m.title }}</div>-->
          <!--<div class="msg-body">{{ m.body }}</div>-->
        <!--</div>-->
      <!--</div>-->
      <AppNavigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  // note: @ is an alias to /src
  import AppNavigation from '../components/AppNavigation.component.vue';

  import { mapGetters } from 'vuex';

  export default {
    name: 'VueApplication',
    components: {
      AppNavigation,
    },
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
      // this.$store.commit('displayMessage', {
      //   clear: true,
      //   message: {
      //     title: 'Greetings',
      //     body: 'Welcome to Safe Recipes.',
      //   }
      // });
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
