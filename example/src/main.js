// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import facebookLogin from '../../src/index.js'

Vue.use(facebookLogin)

/* eslint-disable no-new */
window.Vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
