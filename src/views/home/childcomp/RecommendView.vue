<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0px 20px 0px;
  border-bottom: 10px solid #eee;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 70px;
  height: 70px;
}
</style>