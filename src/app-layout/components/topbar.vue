<template>
  <header class="topbar fixed-header el-header">
    <img
      src="https://cn.vuejs.org/images/logo.png"
      alt=""
      class="logo"
    >

    <span class="top-title">
      应用工厂
    </span>

    <el-menu
      default-active="/app"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/app">应用管理</el-menu-item>
      <el-menu-item index="/app/group">组织架构</el-menu-item>
      <el-menu-item index="/app/power">权限管理</el-menu-item>
    </el-menu>
  </header>
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
