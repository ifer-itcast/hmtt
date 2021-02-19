<template>
  <ul class="catagtory">
    <li
      v-for="item in categories"
      @click="handleClick(item)"
      :class="{ select: currentCategoryId === item.id }"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Category',
  computed: {
    ...mapGetters(['categories', 'currentCategoryId'])
  },
  async created() {
    await this.$store.dispatch('category/getCategories')
    // !#1 获取初始数据
    await this.$store.dispatch('list/getList', this.currentCategoryId)
  },
  methods: {
    handleClick(item) {
      this.$store.commit('category/updateCurrentCategoryId', item.id)
      // !#2 点击的时候根据当前 ID 获取最新数据
      this.$store.dispatch('list/getList', item.id)
    }
  }
}
</script>

<style lang="less" scoped></style>
