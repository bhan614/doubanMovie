<template>
  <div id="app">
    <Dheader></Dheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Dheader from './header.vue'
export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Dheader
  }
}
</script>

<style lang="less" rel="stylesheet/less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
