import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueAnalytics from 'vue-analytics';
import VueProgressBar from 'vue-progressbar';


Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-150754568-1',
  router
});

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