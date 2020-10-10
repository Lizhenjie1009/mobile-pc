<template>
  <div class="phone">
    <router-view></router-view>
    <div>
      <router-link to="/m_home">mobile首页</router-link>
    </div>
    <div>
      <router-link to="/m_detail">mobile详情页</router-link>
    </div>
    <div>
      <router-link to="/m_my">mobile我的</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'phone',
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

  },
  mounted () {

  },
  methods: {
    mobile () {
      // this.$router.push('/m_detail')
      // console.log(1111)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
