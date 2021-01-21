import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import { ua } from '@/locales/ua';

Vue.use(VueI18n);

let i18n = null;

const messages = {
  en,
  ru,
  ua
}

function getLocalization() {
  i18n = i18n || new VueI18n({
    locale: 'ua',
    messages
  });
  return i18n;
}

function changeLocale(locale) {
  i18n.locale = locale;
}

export default {
  getLocalization,
  changeLocale
}