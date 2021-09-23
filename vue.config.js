const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('assets', resolve('src/assets'))
  //     .set('common', resolve('src/common'))
  //     .set('components', resolve('src/components'))
  //     .set('network', resolve('src/network'))
  //     .set('views', resolve('src/views'));
  // },

  configureWebpack: {
    resolve: {
      // 配置.js.vue后缀省略
      // extensions: [],
      alias: {
        // '@': resolve('src'),
        '@assets': '@/assets',
        '@common': '@/common',
        '@components': '@/components',
        '@network': '@/network',
        '@views': '@/views',
      },
    },
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@$', path.join(__dirname, 'src'))
  //     .set('assets', path.join(__dirname, 'src/assets'))
  //     .set('common', path.join(__dirname, 'src/common'))
  //     .set('components', path.join(__dirname, 'src/components'))
  //     .set('network', path.join(__dirname, 'src/network'))
  //     .set('views', path.join(__dirname, 'src/views'));
  // },
};
