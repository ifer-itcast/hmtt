export default {
  namespaced: true,
  state: {
    categories: [],
    currentCategoryId: ''
  },
  mutations: {
    // 更新分类数组
    updateCategories (state, payload) {
      state.categories = payload
    },
    // 更新激活分类 ID
    updateCurrentCategoryId (state, payload) {
      state.currentCategoryId = payload
    }
  },
  actions: {}
}
