<template>
  <div class="hello">
  <MoviesTag :data="this.movingData"></MoviesTag>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MoviesTag from './common/moviesTag.vue'
export default {
  name: 'movie',
  data () {
    return {
      data: {
      }
    }
  },
  mounted () {
    this.$store.dispatch('getMoving')
  },
  methods: {
  },
  components: {
    MoviesTag
  },
  computed: {
    ...mapGetters([
      'movingData'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  p {
    color: red;
  }
}
</style>
