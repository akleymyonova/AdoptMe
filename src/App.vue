<template>
  <v-app>
    <v-card>
      <v-app-bar
        color="deep-purple accent-4"
        hide-on-scroll
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>AdoptMe</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    </v-card>
    
    <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.app-bar {
  /* margin-top: 0; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
