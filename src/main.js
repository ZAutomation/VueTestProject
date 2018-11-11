// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import test from './components/test'
import users from './components/users'
import multipleFileUploader from './components/FileUploader'
import LoginForm from './components/LoginForm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(vueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);


Vue.config.productionTip = false
const router =  new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:LoginForm}, 
    {path:'/test',component:test},
    {path:'/mFileupload',component:multipleFileUploader},
    {path:'/users',component:users}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id =app/>
  <ul>
  <li> <router-link to="/"> loginview </router-link > </li>
  <li> <router-link to="/test"> Test </router-link > </li>
  <li> <router-link to="/mFileupload"> multipleFileUploader </router-link > </li>
  <li> <router-link to="/users"> Users </router-link > </li>
  </ul>
  <router-view></router-view>
  </div>
  `
}).$mount('#app')
