<template>
  <div class="cs-register">
    <lrheader></lrheader>
    <div class="bd">
      <div class="col">
        <div class="title">昵称</div>
        <el-input placeholder="请输入昵称" v-model="email" clearable></el-input>
      </div>
      <div class="col">
        <div class="title">邮箱</div>
        <el-input placeholder="请输入邮箱" v-model="email" clearable></el-input>
      </div>
      <div class="col">
        <div class="title">密码</div>
        <el-input type="password" placeholder="请输入密码" v-model="password" clearable></el-input>
      </div>
      <div class="col">
        <div class="title">类型</div>
        <el-select class="csselect" v-model="userType" placeholder="请选择类型">
          <el-option value="我是发包方" label="我是发包方"></el-option>
          <el-option value="我是测试方" label="我是测试方"></el-option>
        </el-select>
      </div>
      <div class="col">
        <el-button type="primary" class="btn">注册</el-button>
      </div>
    </div>

    <div class="goto">
      已有账号？<router-link to="/cs/login">前往登陆</router-link>
    </div>
  </div>
</template>

<script>
import lrheader from './lrheader'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      userType: ''
    }
  },
  components: {
    lrheader
  }
}
</script>

<style>

</style>
