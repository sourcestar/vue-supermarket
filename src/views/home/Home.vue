<template>
  <!-- ul>li{列表$}*100 -->
  <div id="home">
    <Navbar class="homeNav">
      <div slot="navcenter">购物街</div>
    </Navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
    </ul>
    <p>首页</p>
  </div>
</template>

<script>
import Navbar from "@components/common/navbar/Navbar.vue";
import TabControl from '@components/content/tabControl/TabControl.vue';

import HomeSwiper from "./childcomp/HomeSwiper.vue";
import RecommendView from "./childcomp/RecommendView.vue";
import FeatureView from './childcomp/FeatureView.vue';

import { getHomeMultidata } from "@network/home";


export default {
  name: 'Home',
  components: {
    Navbar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '经典']
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
}
</script >

<style scoped>
#home {
  margin-top: 44px;
}
.homeNav {
  background-color: var(--color-tint);
  color: var(--color-background);
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>