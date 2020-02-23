import Vuex from 'vuex'
import Animals from './modules/Animals'
import AppContext from './modules/AppContext'

export default new Vuex.Store({
  modules: {
    Animals,
    AppContext
  }
})