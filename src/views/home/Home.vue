<template>
  <div>
    <Navbar class="homeNav">
      <div slot="navcenter">购物街</div>
    </Navbar>
    <home-swiper :banners="banners"></home-swiper>
    <p>首页</p>
  </div>
</template>

<script>
import Navbar from "@components/common/navbar/Navbar.vue";
import HomeSwiper from "./childcomp/HomeSwiper.vue";
import { getHomeMultidata } from "@network/home";
export default {
  name: 'Home',
  components: {
    Navbar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
    });
  },
}
</script >

<style>
.homeNav {
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>