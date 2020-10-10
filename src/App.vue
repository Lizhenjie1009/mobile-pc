<template>
  <div id="app">
    <!-- <router-view  v-if="showPage == 2" name="pc"></router-view>
    <router-view v-else></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPage: 2
    }
  },
  created () {
    if (this._isMobile()) {
      this.showPage = 1
    } else {
      this.showPage = 2
    }

    console.log(this.showPage)
  },
  methods: {
    _isMobile () {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }

}
</script>

<style lang="scss">

</style>
