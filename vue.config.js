module.exports = {
  configureWebpack: {
    resolve: {
      // 配置.js.vue后缀省略
      // extensions: [],
      alias: {
        // '@': resolve('src'),
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      },
    },
  },
};
