import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import MetaInfo from 'vue-meta-info'
import VueJsonp from 'vue-jsonp'
import {Swipe, SwipeItem} from 'mint-ui'

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(MetaInfo);
Vue.use(VueJsonp);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
