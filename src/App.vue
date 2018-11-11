<template>
<div id="app">
    </div>
</template>

<script>

import test from './components/test'
import users from './components/users'
import LoginForm from './components/LoginForm'
import FileUploader from './components/FileUploader'

//Vue.component('multipleFileUploader', 'multipleFileUploader');
export default {
  name: 'App',
  components: {
   test,users,FileUploader,LoginForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
