import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueAnalytics from 'vue-analytics';
import VueProgressBar from 'vue-progressbar';
import LoadScript from 'vue-plugin-load-script';


Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-150754568-1',
  router
});

Vue.use(LoadScript);

Vue.loadScript("https://cdn.optimizely.com/js/18152340406.js")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})