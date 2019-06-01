<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item
          index="1"
          class="addbutton"
          @click="dialogVisible = true;newappname=''"
        >
          <span>添加应用</span>
          <i class="el-icon-plus"></i>
        </el-menu-item>
        <template v-for="(item) in appList">
          <el-menu-item
            :index="item.appid"
            @click="handleClick(item.appid)"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.appname}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 显示应用列表 -->
      <!-- 列表显示已有的应用的 -->
      <div>

      </div>

      <div>

        <el-button
          type="primary"
          @click="addform()"
        >添加表单</el-button>
        <el-button type="primary">添加报表</el-button>

      </div>

      <!-- 显示某一应用的列表 -->
      <div  v-for="(item, index) in formList" class="formcard" >

        <span  >
          {{item.formname}}
        </span>



      </div>
    </el-main>
    <!-- 对话框 -->
    <el-dialog
      title="添加应用"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-input
        v-model="newappname"
        placeholder="请输入应用名称"
        clearable
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="newapp()"
        >确 定</el-button>
      </span>
    </el-dialog>

  </el-container>
</template>

<script>
// import {MakingForm} from 'form-making'
// Vue.component(MakingForm.name, MakingForm)
export default {
  data() {
    return {
      activeName: 'second',
      dialogVisible: false,
      appList: [{
        appid: '001',
        appname: '学生成绩系统'
      }, {
        appid: '002',
        appname: '进销货系统'
      }, {
        appid: '003',
        appname: '外贸单系统'
      }],
      formList: [{
        formid: '001',
        formname: '入职'
      }, {
        formid: '002',
        formname: '转正'
      }, {
        formid: '003',
        formname: '离职'
      }],
      key() {
        return this.$route.fullPath
      },
      newappname: '',


    };
  },
  methods: {
    handleClick(index) {
      console.log(index);
    },
    newapp() {
      this.dialogVisible = false;
      console.log(this.newappname);
      this.appList.push({ appid: '004', appname: this.newappname });
      this.newappname = '';
    },
    addform() {
      this.$router.push({ path: '/form' })
    },
    showform() {
      this.$router.push({ path: '/wform' })
    }
  }
};
</script>




<style  lang="scss" scoped>
.app-container {
  padding: 0px;
  height: 100%;
  .el-dialog {
    height: 30%;
  }
  .el-aside {
  }
  .el-main {
    border: 1px solid darkblue;
  }

  .formcard{
    float: left;
    // border: 1px solid black;
    height: 50px;
    width: 100px;
    text-align: center;
    line-height: 50px;
    background-color: #94C9FF;
    color: white;
    border-radius: 4px;
    margin: 10px 0px;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>



