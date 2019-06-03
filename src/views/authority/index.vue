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
            @click="dialogAddRole = true"
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
          :value="item"
        >
        </el-option>
      </el-select>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddNumber = false">取 消</el-button>
        <el-button type="primary" @click="addnumbersure()">确 定</el-button>
      </span>
    </el-dialog>


     <!-- 新建角色 -->
    <el-dialog
      title="新建角色"
      :visible.sync="dialogAddRole"
    >
     <el-input v-model="rolenput" placeholder="请输入内容"></el-input>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddRole = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddRole = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: 'topbar',
  data() {
    return {
      dialogAddNumber: false,
      dialogAddRole: false,
      rolenput:'',

      options: [{
          value: '选项1',
          label: '张三'
        }, {
          value: '选项2',
          label: '李四'
        }, {
          value: '选项3',
          label: '王五'
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
        name: '王虎',
        part: '财务'
      }, {
        id: '20160504',
        name: 'xx虎',
        part: '销售'
      }, {
        id: '20105-01',
        name: 'ee虎',
        part: '管理'
      }, {
        id: '2016-05-03',
        name: 'll虎',
        part: '实验室'
      }],

      options: [{
        id:'212',
        value: '选项1',
        label: '李明1',
        name: '李明1',
        part: '财务'


      }, {
        id:'222',
        value: '选项2',
        label: '李明2',
        name: '李明2',
        part: '财务'


      }, {
        id:'202',
        value: '选项3',
        label: '李明3',
        name: '李明23',
        part: '财务'


      }, {
        id:'201232',
        value: '选项4',
        label: '李明4',
        name: '李明4',
        part: '开发'
      }, {
        id:'20123432',
        value: '选项5',
        label: '李明5',
        name:'李明5',
        part: '开发'
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
    },
    addnumbersure(){
       this.userData=this.userData.concat(this.value1);
          this.dialogAddNumber=false;

    },

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
