import Vue from 'vue';
import VueRouter from 'vue-router';

// 路由懒加载
const HomePage = () => import('@views/tabbar/home/Home.vue');
const CategoryPage = () => import('@views/tabbar/category/Category.vue');
const CartPage = () => import('@views/tabbar/cart/Cart.vue');
const ProfilePage = () => import('@views/tabbar/profile/Profile.vue');

// 使用插件
Vue.use(VueRouter);

// 解决重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/cate',
    component: CategoryPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
];
// 实例化vuerouter
const router = new VueRouter({
  routes,
  mode: 'history',
});

//导出router

export default router;
