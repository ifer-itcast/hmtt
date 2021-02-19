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
    await this.$store.dispatch('list/getList', this.currentCategoryId)
  },
  methods: {
    handleClick(item) {
      this.$store.commit('category/updateCurrentCategoryId', item.id)
      this.$store.dispatch('list/getList', item.id)
    }
  }
}
</script>

<style lang="less" scoped></style>
