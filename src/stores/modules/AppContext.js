const state = {
  isOpenedSearch: false
}

const getters = {
  isOpenedSearch: state => {
    return state.isOpenedSearch;
  }
}

const mutations = {
  setIsOpenedSearch(state, value) {
    state.isOpenedSearch = value;
  }
}

const actions = {
  setIsOpenedSearch({ commit }, value) {
    commit('setIsOpenedSearch', value);
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}