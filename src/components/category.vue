<template>
  <ul class="catagtory">
    <li
      v-for="item in categories"
      @click="$store.commit('category/updateCurrentCategoryId', item.id)"
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
    // !#6
    ...mapGetters(['categories', 'currentCategoryId'])
  },
  created() {
    // !#1
    this.$store.dispatch('category/getCategories')
  }
}
</script>

<style lang="less" scoped></style>
