<template>
  <div class="tab-bar-item">
    <div>
      <slot name="item-icon"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
  <!-- <i class="fa fa-user-circle-o">User</i>
  fa-user-circle
  fa-home
  fa-shopping-bag
  fa-list -->
</template>

<script>
export default {
  name: 'TabbarItem',

}
</script>

<style>
@import "../../../assets/css/font-awesome.min.css";
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.item-con {
}
.item-text {
}
</style>