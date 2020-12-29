import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    category,
    list
  },
  getters: {
    // 建立对于子模块的快捷访问
    categories: state => state.category.categories,
    currentCategoryId: state => state.category.currentCategoryId,
    currentList: state => state.list.allList[state.category.currentCategoryId] || []
  }
})
