import axios from 'axios'

export default {
  namespaced: true,
  state: {
    allList: {} // { cateId1: [], cateId2: [] }
  },
  mutations: {
    updateList(state, { currentCategoryId, list }) {
      state.allList = { ...state.allList, [currentCategoryId]: list }
    }
  },
  actions: {
    async getList(context, cateId) {
      const { data: { data: { results } } } = await axios.get(`http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cateId}&timestamp=${Date.now()}&with_top=1`)
      context.commit('updateList', { currentCategoryId: cateId, list: results })
    }
  }
}
