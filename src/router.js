import Vue from 'vue'
import VueRouter from 'vue-router'

import AnimalsList from '@/components/AnimalsList'
import AnimalInfo from '@/components/AnimalInfo'
import MainPage from '@/components/MainPage'

Vue.use(VueRouter);

const routes= [
  { path: '/animals', name: 'AnimalsList', component: AnimalsList },
  { path: '/animal/:id', name: 'AnimalInfo', component: AnimalInfo },
  { path: '/hello', name: 'HelloPage', component: MainPage },
  { path: '*', component: MainPage }
];

export default new VueRouter({ routes });