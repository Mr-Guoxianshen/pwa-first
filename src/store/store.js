import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'

Vue.use(Vuex);
const state = {
  transitionName: 'slide-left',
  isLoading: false,
}
const actions = {
  [types.SET_PAGE_TRANSITION]({commit}, transitionName) {
    commit('SET_PAGE_TRANSITION', transitionName)
  },
  [types.SET_LOADING_STATUS]({commit}, isLoading) {
    commit('SET_LOGIN_STATUS', isLoading)
  },
}
const getters = {
  [types.GET_PAGE_TRANSITION](state) {
    return state.transitionName
  },
  [types.GET_LOADING_STATUS](state) {
    return state.isLoading
  },
}
const mutations = {
  [types.SET_PAGE_TRANSITION](state, transitionName) {
    state.transitionName = transitionName
  },
  [types.SET_LOADING_STATUS](state, isLoading) {
    state.isLoading = isLoading
  },
}


export default new Vuex.Store({
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations
})
