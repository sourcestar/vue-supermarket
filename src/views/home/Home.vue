<template>
  <!-- ul>li{列表$}*100 -->
  <div id="home">
    <Navbar class="homeNav">
      <div slot="navcenter">购物街</div>
    </Navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="titles"
      @tabClick="tabClick"
    ></tab-control>
    <good-list :goods="goods[currentType].list"></good-list>

    <p>首页</p>
  </div>
</template>

<script>
import Navbar from "@components/common/navbar/Navbar.vue";
import TabControl from '@components/content/tabControl/TabControl.vue';
import GoodList from '@components/content/goods/GoodList.vue';

import HomeSwiper from "./childcomp/HomeSwiper.vue";
import RecommendView from "./childcomp/RecommendView.vue";
import FeatureView from './childcomp/FeatureView.vue';

import { getHomeMultidata, getHomeGoods } from "@network/home";



export default {
  name: 'Home',
  components: {
    Navbar,
    TabControl,
    GoodList,
    HomeSwiper,
    RecommendView,
    FeatureView,

  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '经典'],
      currentType: 'pop',
      goods: {
        'pop': { "page": 0, "list": [] },
        'new': { "page": 0, "list": [] },
        'sell': { "page": 0, "list": [] }
      }
    }
  },
  created() {
    // 请求首页多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    /**
     * 事件相关方法
     */
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      // 请求首页多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 请求商品数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
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