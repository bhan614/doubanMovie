<template>
  <div class="hello">
  <p>
    {{title}}
  </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getMoving')
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'title'
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
