import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    list
  }
})
