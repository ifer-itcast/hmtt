<template>
  <div class="list">
    <div class="article_item">
      <h3 class="van-ellipsis">python数据预处理 ：数据标准化</h3>
      <div class="img_box">
        <img src="@/assets/back.jpg" class="w100" />
      </div>
      <!---->
      <div class="info_box">
        <span>13552285417</span>
        <span>0评论</span>
        <span>2018-11-29T17:02:09</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapGetters(['currentCategoryId'])
  },
  watch: {
    currentCategoryId(newValue) {
      this.$store.dispatch('list/getList', newValue)
    }
  }
}
</script>

<style lang="less" scoped></style>
