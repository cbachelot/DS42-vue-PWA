// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Design System 42',
      themeColor: '#001d2c',
      msTileColor: '#001d2c',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxOptions: {
        skipWaiting: true
    }
    }
  }
