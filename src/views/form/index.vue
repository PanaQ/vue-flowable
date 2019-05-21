<template>
  <div class="form-container">

    <el-input
      v-model="input"
      placeholder="请输入表单名"
      class="input-name"
    ></el-input>
    <fm-making-form
      ref="makingform"
      style="height: 500px;"
      preview
    >
      <template slot="action">
      </template>
    </fm-making-form>

    <el-button
      type="primary"
      @click="getjson()"
    >保存表单</el-button>



  </div>

</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    /**获取设计器json数据**/
    getjson() {
       console.log(JSON.stringify(this.$refs.makingform.getJSON()));
      var storage = window.localStorage;
      //写入a字段
      storage = this.$refs.makingform.getJSON();
      this.$router.push({ path: '/app' })
      return this.$refs.makingform.getJSON();

    }
  }
}
</script>
<style  lang="scss" scoped>
.form-container {
  padding: 30px 20px;
  .input-name {
    margin-bottom: 40px;
  }
}
</style>



