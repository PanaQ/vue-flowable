<template>
  <header class="topbar fixed-header el-header">
    <img
      src="https://cn.vuejs.org/images/logo.png"
      alt=""
      class="logo"
    >

    <span class="top-title">
      xxxxxxxx
    </span>

    <el-menu
      :default-active="'/app'+topbarlist[0].path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <template v-for="(item,index) in topbarlist ">
        <el-menu-item
          :index="'/app'+item.path"
          :key="index"
        >{{item.name}}</el-menu-item>
      </template>
    </el-menu>

    <div class="right-tabs">

      <div>
        <span @click="toHome()">首页</span>
      </div>

      <div class="vertical-divider"> </div>
      <div>
        <span>模板中心</span>
      </div>
      <div class="vertical-divider"> </div>
      <div>
        <i
          class="el-icon-switch-button"
          @click="logout()"
        > </i>
      </div>
      <div class="vertical-divider"> </div>
      <div>
        <img
          src="https://cn.vuejs.org/images/logo.png"
          alt=""
          class="user-img"
          style="height:32px;"
        >
      </div>

    </div>

  </header>
</template>

<script>


export default {
  name: 'topbar',
  data() {
    return {
      topbarlist: [
        {
          "id": 29,
          "path": "/application",
          "component": "Home",
          "name": "应用管理",
          "iconCls": "fa fa-user-circle-o",
          "children": [],
          "meta": null,
          "keepAlive": null,
          "requireAuth": true
        },
        {
          "id": 30,
          "path": "/organization",
          "component": "Home",
          "name": "组织架构",
          "iconCls": "fa fa-address-card-o",
          "children": [],
          "meta": null,
          "keepAlive": null,
          "requireAuth": true
        },
        {
          "id": 31,
          "path": "/authority",
          "component": "Home",
          "name": "权限管理",
          "iconCls": "fa fa-money",
          "children": [],
          "meta": null,
          "keepAlive": null,
          "requireAuth": true
        },
        {
          "id": 32,
          "path": "/companyInfo",
          "component": "Home",
          "name": "企业信息",
          "iconCls": "fa fa-bar-chart",
          "children": [],
          "meta": null,
          "keepAlive": null,
          "requireAuth": true
        }
      ]
      ,
    };
  },
  components: {

  },
  computed: {

  },
  methods: {

    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  border: 1px solid #e6e6e6;
  color: #333;
  text-align: center;
  height: 62px;
  line-height: 60px;
  width: 100%;
  background: #fff;
  img.logo {
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
    width: 800px;
    display: inline-block;
    float: left;
  }
  // s
  // i.el-icon-switch-button {
  //   float: right;
  //   padding: 15px;
  //   font-size: 20px;
  //   &:hover {
  //     cursor: pointer;
  //     color: aqua;
  //   }
  // }

  .right-tabs {
    position: absolute;
    right: 0;
    top: 0;
    height: 66px;
    line-height: 63px;
    margin: 0;
    padding: 0;
    text-align: center;
    // border: 1px solid;

    width: 300px;
    display: flex;

    & > div {
      display: inline-block;
      padding: 0 16px;
      cursor: pointer;
    }

    .vertical-divider {
      height: 16px;
      color: #aaa;
      padding: 0 !important;
      margin: 20px 0 0px 0 !important;
      height: 22px;
      line-height: 22px;
      border-left: 1px solid;
      font-size: 0;
    }
  }
}
</style>
