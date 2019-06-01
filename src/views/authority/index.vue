<template>
  <el-container class="authority_con">

    <el-aside width="220px">
      <el-menu
        :default-active="rolelist[0].roleName"
        class="el-menu-vertical-demo"
      >
        <el-menu-item>
          <el-button
            size="mini"
            type="primary"
          >新建角色</el-button>
          <el-button
            size="mini"
            type="primary"
          >新建角色组</el-button>
        </el-menu-item>

        <template v-for="(item,index) in rolelist">
          <el-menu-item
            :index="item.roleName"
            :key="index"
          >
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.roleNameZh}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-main>

      <div class="tabs">
        <span class="tabs-tab">
          角色成员管理
        </span>
      </div>
      <div class="btn-con">
        <el-button
          type="primary"
          size="small"
          @click="addNumber()"
        >添加成员</el-button>
      </div>

      <el-table
        :data="userData"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="工号"
          width="170"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="part"
          label="部门"
        >
        </el-table-column>
        <el-table-column
          prop="part"
          label="操作"
        >

        </el-table-column>
      </el-table>

    </el-main>

    <!-- 添加成员 -->
    <el-dialog
      title="添加成员"
      :visible.sync="dialogAddNumber"
    >
      <el-select
        v-model="value1"
        multiple
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
</el-dialog>
  </el-container>
</template>

<script>
export default {
  name: 'topbar',
  data() {
    return {
      dialogAddNumber: false,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        value2: [],
      rolelist: [{
        "id": 3,
        "roleName": "ROLE_test1",
        "roleNameZh": "业务人员",
        "roleDescription": "测试角色",
        "status": true,
        "applicableUnitLevel": null,
        "productCode": null,
        "enableTime": "2019-05-28T02:07:59.000+0000",
        "disableTime": null,
        "updatedTime": null,
        "createdTime": "2019-05-28T02:07:58.684+0000"
      },
      {
        "id": 4,
        "roleName": "ROLE_test2",
        "roleNameZh": "测试人员",
        "roleDescription": "测试角色",
        "status": true,
        "applicableUnitLevel": null,
        "productCode": null,
        "enableTime": "2019-05-28T02:08:24.000+0000",
        "disableTime": null,
        "updatedTime": null,
        "createdTime": "2019-05-28T02:08:23.554+0000"
      },
      {
        "id": 5,
        "roleName": "ROLE_test3",
        "roleNameZh": "调配人员",
        "roleDescription": "测试角色",
        "status": true,
        "applicableUnitLevel": null,
        "productCode": null,
        "enableTime": "2019-05-28T02:09:49.000+0000",
        "disableTime": null,
        "updatedTime": null,
        "createdTime": "2019-05-28T02:09:48.943+0000"
      }
      ],
      userData: [{
        id: '20160502',
        name: '王小虎',
        part: '111'
      }, {
        id: '20160504',
        name: '王小虎',
        part: '222'
      }, {
        id: '20105-01',
        name: '王小虎',
        part: '3333'
      }, {
        id: '2016-05-03',
        name: '王小虎',
        part: '44444'
      }],

      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    };
  },
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
    },
    handleClick() {

    },
    addNumber() {
          this.dialogAddNumber=true;
    }

  }
}
</script>

<style lang="scss" scoped>
.authority_con {
  padding: 0px;
  height: 100%;
  .el-dialog {
    height: 30%;
  }
  .el-aside {
    .el-menu-item:first-child {
      &:hover {
        background-color: #ffff !important;
      }
    }
  }
  .el-main {
    border-left: 2px solid #e7e7e7;
    .tabs {
      text-align: center;
      // border: 1px solid;
      width: 60%;
      display: inline-block;

      .tabs-tab {
        display: inline-block;
        height: 100%;
        padding: 8px 16px;
        margin-right: 16px;
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease-in-out;
        border-bottom: 3px solid #2d7fff !important;
      }
    }
    .btn-con {
      display: inline-block;
      margin-left: 20px;
    }

    .el-table {
      padding: 10px;
      border: 1px solid;
      margin: 20px 10px;
    }
  }

  .formcard {
    float: left;
    // border: 1px solid black;
    height: 50px;
    width: 100px;
    text-align: center;
    line-height: 50px;
    background-color: #94c9ff;
    color: white;
    border-radius: 4px;
    margin: 10px 0px;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>
