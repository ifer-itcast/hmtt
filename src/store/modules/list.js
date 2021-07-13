import axios from 'axios'
// import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    allList: {} // { cateId1: [], cateId2: [] }
  },
  mutations: {
    // { currentCategoryId, list } => 要求外界传递必须是一个对象，并且对象里面必须有一个 key 叫 currentCategoryId，另一个 key 叫 list
    updateList(state, { currentCategoryId, list }) {
      // 这样写确实是可以记录下来，不信你可以通过 vue-devtools 可以明确看到数据，但是不是响应式的
      // 两种情况不是响应式的
      // 1. 通过索引修改数组里面的数据，例如 arr[0] = 1
      // 2. 给一个对象不存在的 key 直接赋值，也不是响应式的
      // state.allList[currentCategoryId] = list
      // 解决方案
      // Vue.set(state.allList, currentCategoryId, list)
      state.allList = { ...state.allList, [currentCategoryId]: list }
    }
  },
  actions: {
    async getList(context, cateId) {
      const {
        data: {
          data: { results }
        }
      } = await axios.get(
        `http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cateId}&timestamp=${Date.now()}&with_top=1`
      )
      context.commit('updateList', { currentCategoryId: cateId, list: results })
    }
  }
}
