// git操作
// git status 查询修改状态
// git add .  添加修改内容
// git commit -m "提交描述" 提交到本地
// git push  提交到服务器
<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabbar from '@components/content/mainTabbar/MainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "~@assets/css/base.css";
</style>
