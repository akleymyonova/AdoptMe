import Vue from 'vue'
import VueRouter from 'vue-router'

import AnimalsList from '@/components/AnimalsList'
import MainPage from '@/components/MainPage'
import AnimalInfo from '@/components/AnimalInfo'

Vue.use(VueRouter);

const routes= [
  { path: '/animals', component: AnimalsList },
  { path: '/animal/:id', component: AnimalInfo },
  { path: '*', component: MainPage }
];

export default new VueRouter({ routes });