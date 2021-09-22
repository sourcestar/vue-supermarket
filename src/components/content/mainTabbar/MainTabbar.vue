<template>
  <div>
    <tabbar>
      <tabbar-item>
        <i slot="item-icon" class="fa fa-lg fa-home"></i>
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item>
        <i slot="item-icon" class="fa fa-lg fa-list"></i>
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item>
        <i slot="item-icon" class="fa fa-lg fa-shopping-bag"></i>
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item>
        <i slot="item-icon" class="fa fa-lg fa-user-circle"></i>
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "common/tabbar/Tabbar.vue"
import TabbarItem from "common/tabbar/TabbarItem.vue"
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
</style>