<template>
  <div id="wrapper" v-loading="loadingMoving">
    <h2>豆瓣新片榜 · · · · · · </h2>
    <div class="indent">
      <div class="">
        <p class="ul first"></p>
        <searchTag v-for="(subject,index) in ranking250.subjects" :subject="subject" :key="index"></searchTag>
      </div>
    </div>
  </div>
</template>
<script>
  import searchTag from './common/searchTag'
  import { mapGetters } from 'vuex'
  export default{
    props: {
      data: Object
    },
    data () {
      return {
        top250: [],
        timer: null,
        isLoad: false,
        page: 1,
        totalPage: 0,
        start: 1
      }
    },
    mounted () {
      this.$store.commit('PAGE_START', {start: 0})
      this.$store.dispatch('getTop250')
    },
    components: {
      searchTag
    },
    computed: {
      ...mapGetters([
        'ranking250',
        'loadingMoving'
      ])
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  #wrapper {
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }
</style>
