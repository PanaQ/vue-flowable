<template>
 <div>11111</div>
</template>

<script>


export default {
  name: 'topbar',
  components: {

  },
  computed: {

  },
  methods: {

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  // border: 2px solid black;
  color: #333;
  text-align: center;

  height: 60px;
  line-height: 50px;
  width: 100%;
  background: #fff;

  img {
    float: left;
    height: 30px;
    display: inline-block;
    margin-top: 10px;
  }
  .top-title {
    float: left;
    margin: 0px 30px;
    font-size: 26px;
  }
  .el-menu {
    border: 1px saddlebrown solid !important;
    width: 50%;
    margin-left: 180px;
  }
}
</style>
