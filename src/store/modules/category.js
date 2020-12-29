import axios from 'axios'
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
  actions: {
    async getCategories (context) {
      const { data: { data: { channels } } } = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
      context.commit('updateCategories', channels)
      // 默认激活第 0 个频道 ID
      context.commit('updateCurrentCategoryId', channels[0].id)
    }
  }
}
