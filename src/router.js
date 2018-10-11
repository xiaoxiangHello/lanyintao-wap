import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)
export default new Router({
  baes:'/',
  mode:'history',
  routes: [{
    path:'/',
    name:'Index',
    component:Index
  }]
})
