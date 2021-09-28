<template>
  <div id="goodlist">
    <good-list-item v-for="item in goods" :goodsItem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue"
export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style scoped>
#goodlist {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
</style>