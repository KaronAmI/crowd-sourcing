<template>
  <el-card class="cs-register">
    <div class="col">
      <div class="cstitle">邮箱：</div>
      <el-input class="csinput" placeholder="请输入邮箱" v-model="email" clearable></el-input>
    </div>
    <div class="col">
      <div class="cstitle">密码：</div>
      <el-input class="csinput" placeholder="请输入密码" v-model="email" clearable></el-input>
    </div>
    <div class="col">
      <div class="cstitle">类型：</div>
      <el-radio v-model="userType" label="发包方">发包方</el-radio>
      <el-radio v-model="userType" label="测试人员">测试人员</el-radio>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      userType: ''
    }
  }
}
</script>

<style>

</style>
