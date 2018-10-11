import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
//import MetaInfo from 'vue-meta-info'

Vue.config.productionTip = false
Vue.use(MintUI);
//Vue.use(MetaInfo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
