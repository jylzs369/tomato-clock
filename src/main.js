// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import Axios from 'axios'
import Mock from 'mockjs'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(vuex)
Vue.prototype.$axios = Axios
Vue.prototype.$mock = Mock

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
