<template>
  <v-app>
    <ApplicationToolbar />
    
    <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueI18n from 'vue-i18n';
import ApplicationToolbar from '@/components/views/ApplicationToolbar';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueI18n);

export default {
  name: 'App',
  components: {
    ApplicationToolbar
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
