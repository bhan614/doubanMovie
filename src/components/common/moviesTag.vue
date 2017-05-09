<template>
  <div class="moviesList" v-loading="this.loadingMoving">
    <div class="movieTag" v-for="(subject,index) in data.subjects">
      <ul>
        <li class="film-pic">
          <a @click='showDetail(subject.id)'>
            <img :src="subject.images.large" alt="">
          </a>
        </li>
        <li class="film-name">
          <a href="">{{subject.title}}</a>
        </li>
        <li class="film-rate">
          <el-rate
            v-model="subject.rating.average"
            disabled>
          </el-rate>
          <span class="rateNum">{{subject.rating.average}}</span>
        </li>
        <li class="film-button">
        <span>
          <a href="">特惠选座</a>
        </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  props:{
    data: Object
  },
  data () {
    return {
    }
  },
  watch:{
    data(){
    }
  },
  computed: {
    ...mapGetters([
      'loadingMoving'
    ])
  },
  methods: {
    showDetail(id) {
      this.$router.push({ path: '/moviesDetail' })
      this.$store.commit('MOVING_ID', {id, id})
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less">
.moviesList{
  width: 950px;
  margin: 30px auto 0;
  .movieTag{
    width: 118px;
    height: 270px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin: 0 20px 20px 20px;
    ul{
      margin: 0 auto;
      padding: 0;
      li{
        list-style: none;
      }
    }
    a{
      cursor: pointer;
      text-decoration: none;
    }
    .film-pic{
      height: 180px;
      margin-bottom: 12px;
      overflow: hidden;
      a{
        img{
          width: 128px;
          vertical-align: middle;
        }
      }
    }
    .film-name{
      font-size: 14px;
      white-space: nowrap;
      height: 22px;
      overflow: hidden;
      a{
        display: inline-block;
        word-spacing: normal;
        height: 24px;
        line-height: 24px;
        text-decoration: none;
        color: black;
      }
    }
    .film-rate{
      display: inline-block;
      margin: 4px auto 5px;
      height: 19px;
      .el-rate{
        display: inline-block;
        .el-rate__item{
          transform: scale(0.8);
          display: inline-block;
          vertical-align: middle;
        }
        .el-rate__icon{
          font-size: 12px;
          margin-right: 0px;
        }
      }
      .rateNum{
        display: inline-block;
        font-size: 12px;
        vertical-align: middle;
      }
    }
    .film-button{
      span{
        display: block;
        margin:0 auto;
        text-align: center;
        width: 90px;
        height: 24px;
        line-height: 24px;
        background-color:#268dcd;
        border-radius: 2px;
        a{
          color: #fff;
        }
      }
    }
  }
}
</style>
