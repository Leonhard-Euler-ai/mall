import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.config.devtools = true;
//事件总线，图片加载完成与上拉加载刷新BScroll时所用
//Vue.prototype.$bus=new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
