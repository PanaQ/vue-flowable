
<template>
  <!-- 点击按钮   跳出弹窗 -->
  <div class="addapp-dia">
    <span @click="addapp()">
      添加应用
    </span>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
// import {  } from 'vuex'

export default {
  name: 'adddia',
  data() {
      return {
        dialogVisible: false
      };
    },
  computed: {

  },
  methods: {

    addapp() {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>
<style lang="scss" scoped>
.addapp-dia{
  height: 30px;
  border: 3px solid red;
  margin: 20px;
}
</style>

