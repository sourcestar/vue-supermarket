<template>
  <div>
    <Navbar class="homeNav">
      <div slot="navcenter">购物街</div>
    </Navbar>
    <swiper></swiper>
    <p>首页</p>
  </div>
</template>

<script>
import Navbar from "@components/common/navbar/Navbar.vue";
import Swiper from "@components/common/swiper/Swiper.vue";
export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper
  }
}
</script >

<style>
.homeNav {
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>