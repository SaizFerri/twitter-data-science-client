<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default {
  name: 'app'
}
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
}
</style>
