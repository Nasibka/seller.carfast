import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/main.css';
import '@/assets/css/style.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
