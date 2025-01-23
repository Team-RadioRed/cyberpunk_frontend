const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/scss/variables.scss";'
      }
    }
  },
  pwa: {
    name: 'Cyberpunk DataBase',
    themeColor: '#000228;',
    manifestOptions: {
      background_color: '#000228;'
    },
    iconPaths: {
      favicon32: 'img/icons/favicon.ico',
      favicon16: 'img/icons/favicon.ico',
      appleTouchIcon: 'img/icons/favicon.ico',
      maskIcon: 'img/icons/favicon.ico',
      msTileImage: 'img/icons/favicon.ico'
    }
  }
});
