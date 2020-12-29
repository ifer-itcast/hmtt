<template>
  <div id="app">
    <!-- 分类 -->
    <category/>
    <!-- 列表 -->
    <list/>
  </div>
</template>

<script>
import Category from '@/components/category'
import List from '@/components/list'
export default {
  name: 'App',
  components: {
    Category,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
