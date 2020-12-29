<template>
  <div class="list">
    <div class="article_item" v-for="item in currentList" :key="item.art_id">
      <h3 class="van-ellipsis">{{item.title}}</h3>
      <div class="img_box" v-if="item.cover.type===1">
        <img :src="item.cover.images[0]" class="w100" />
      </div>
      <div class="img_box" v-if="item.cover.type===3">
        <img :src="item.cover.images[0]" class="w33" />
        <img :src="item.cover.images[1]" class="w33" />
        <img :src="item.cover.images[2]" class="w33" />
      </div>
      <!---->
      <div class="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapGetters(['currentCategoryId', 'currentList'])
  },
  watch: {
    currentCategoryId(newValue) {
      this.$store.dispatch('list/getList', newValue)
    }
  }
}
</script>

<style lang="less" scoped></style>
