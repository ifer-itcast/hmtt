<template>
  <ul class="catagtory">
    <li :class="{select: currentCategoryId === item.id}" v-for="item in categories" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Category',
  computed: {
    ...mapGetters(['categories', 'currentCategoryId'])
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
