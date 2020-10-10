<template>
  <div class="pc">
    <router-link to="/p_home">首页</router-link>
    <h1>pc</h1>
    <router-link to="/p_detail">pc详情页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'pc',
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {
    console.log('pc')
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
