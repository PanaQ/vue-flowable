<template>
  <el-container class="home-container">
    <el-header>
      <img
        class="logo"
        src="https://cn.vuejs.org/images/logo.png"
      >
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        size="small"
      > </el-input>

      <!-- 右侧 -->
      <span class="username" @click="toReg()">
        user
      </span>

      <el-tooltip
        class="item"
        effect="dark"
        content="应用工厂"
        placement="bottom"
      >
        <i
          class="el-icon-setting "
          @click="toMyApp()"
        ></i>
      </el-tooltip>
    </el-header>




    <el-main>
      <el-row :gutter="20">
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <div class="shared-head">
              <span class="head__title"> 我的流程</span>
              <div class="message__more">更多</div>
            </div>

            <ul class="work-list__content">
              <li class="to_do_list">
                <div class="todo__title">
                  代办
                </div>
                <span class="todo__count">
                  0
                </span>

              </li>
              <li class="to_do_list">
                <div class="todo__title">
                  代阅
                </div>
                <span class="todo__count">
                  0
                </span>

              </li>
              <li class="to_do_list">
                <div class="todo__title">
                  我发起的
                </div>
                <span class="todo__count">
                  0
                </span>

              </li>

            </ul>

          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content bg-purple">
            <div class="shared-head">
              <span class="head__title"> 提醒事项</span>
              <div class="message__more">更多</div>
            </div>

          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="grid-content bg-purple">

            <img src="" alt="">
          </div>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    toMyWork() {

    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toMyApp() {

      this.$router.push({
        path: '/app'
      })
    },
    toReg(){
      this.$router.push({
        path: '/reg'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  .el-header,
  .el-footer {
    color: #333;
    line-height: 50px;
    border-bottom: 1px solid #efefef;
  }
  .el-header {
    img {
      float: left;
      height: 30px;
      line-height: 60px;
      margin: 16px 20px;
    }
    .el-input {
      // 头部搜索框
      float: left;
      width: 220px;
      margin: 5px 30px;
    }
    ul {
      list-style: none;
      font: 15px verdana, arial, sans-serif; /* 设置文字大小和字体样式 */

      li {
        float: right; /* 往左浮动 */
        list-style: none; /* 将默认的列表符号去掉 */
        padding: 0; /* 将默认的内边距去掉 */
        margin: 0; /* 将默认的外边距去掉 */
        display: inline;
        // line-height: 30px;
        padding: 0px 12px;
        &:hover {
          cursor: pointer;
          color: powderblue;
        }
      }
    }
    .first-ul li {
      border-right: 2px solid rgb(79, 82, 79);
      &:last-child {
        border-left: 2px solid rgb(79, 82, 79);
      }
    }

    //
    .el-icon-setting {
      float: right;
      font-size: 26px;
      margin-top: 15px;
      margin-right: 30px;
      cursor: pointer;
    }

    .username {
      //圆形姓名
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 34px;
      height: 34px;
      background: #107fff;
      border-radius: 30px;
      overflow: hidden;
      margin-right: 20px;
      cursor: pointer;
      color: #fff;
      float: right;
      margin-top: 10px;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    height: 100%;
    display: grid;
    padding: 50px 100px;
    background-color: #f3f5f8;

    .el-row {
      margin-bottom: 30px;
      &:first-child {
        height: 320px;
      }

      .shared-head {
        padding: 0 16px 0 20px;
        height: 56px;
        border-bottom: 1px solid rgba(235, 237, 245, 0.9);
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .head__title {
          font-size: 16px;
          padding: 10px 12px;
          position: relative;
          color: #304265;
        }
        .head__title:before {
          content: " ";
          width: 4px;
          height: 16px;
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#25b6ff),
            to(#107fff)
          );
          background: linear-gradient(180deg, #25b6ff, #107fff);
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 13px;
        }
      }
      .message__more {
        margin-left: auto;
        font-size: 14px;
        color: #8893a7;
        cursor: pointer;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
      }
      .work-list__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 33px 36px;
        height: calc(100% - 56px);
        min-height: 238px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        list-style: none;
        margin: 0;
        // padding: 0;
        padding: 10px 40px;
        .to_do_list {
          // border: 1px solid;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 28%;
          border-radius: 6px;
          background-color: #fff;
          cursor: pointer;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;


          &:hover {
            background-color: #f7fafc;
            .todo__title {
            background: #fff;
            color: #107fff;
            -webkit-box-shadow: 0 0 8px 0 #e6edfd;
            box-shadow: 0 0 8px 0 #e6edfd;
          }
          }

          .todo__title {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 65%;
            min-width: 74px;
            max-width: 150px;
            height: 32px;
            margin: 0 0 18px 0;
            font-size: 16px;
            border-radius: 16px;
            background: #f7fafc;
            -webkit-box-shadow: 0 0 0 0 #e6edfd;
            box-shadow: 0 0 0 0 #e6edfd;
            color: #8893a7;
            -webkit-transition: all 0.2s ease 0.05s;
            transition: all 0.2s ease 0.05s;
          }
          .todo__count {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            font-size: 50px;
            font-weight: 500;
            color: #304265;
            -webkit-transition: color 0.2s 0.05s;
            transition: color 0.2s 0.05s;

            &:hover{
              color: #107fff;
            }
          }
        }
      }
    }
    .el-col {
      height: 100%;
      border-radius: 6px;
    }
    .bg-purple {
      background-color: #fff;
      border-radius: 4px;
      height: 100%;
      border: 1px solid #304265;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      height: 100%;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>
