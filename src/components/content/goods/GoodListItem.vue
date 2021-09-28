<template>
  <div class="goodlistitem">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goodinfo">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav"><i class="collect-icon"></i>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goodlistitem {
  width: 48%;
  padding-top: 6px;
}
.goodlistitem img {
  width: 100%;
  border-radius: 5px;
}
.goodinfo {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  padding: 6px 2px;
}
.goodinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goodinfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(~@assets/images/home/collect_icon.png) no-repeat;
  background-size: cover;
  vertical-align: bottom;
}
</style>