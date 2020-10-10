<template>
  <div class="phone">
    <h1 @click="linkto">移动端首页</h1>
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
    linkto () {
      this.$router.push('/m_detail')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
