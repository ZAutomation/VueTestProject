// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import test from './components/test'
import users from './components/users'

Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false
const router =  new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:users}, 
    {path:'/test',component:test}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id =app/>
  <ul>
  <li> <router-link to="/"> Users </router-link > </li>
  <li> <router-link to="/test"> Test </router-link > </li>
  </ul>
  <router-view></router-view>
  </div>
  `
}).$mount('#app')
