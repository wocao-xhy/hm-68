import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/base.less'
import 'amfe-flexible'
import './style/iconfont.css'
import HmHeader from '../src/components/HmHeader.vue'
import HmLog from '../src/components/HmLog.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios
Vue.component('hm-log', HmLog)
Vue.use(Vant)
Vue.component('hm-header', HmHeader)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
