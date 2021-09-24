<template>
  <div>
    <swiper-item>
      <div slot="itemImage">图片</div>
    </swiper-item>
  </div>
</template>

<script>
import SwiperItem from "@components/common/swiper/SwiperItem.vue";
export default {
  name: "Swiper",
  components: {
    SwiperItem
  }
}
</script>

<style scoped>
</style>