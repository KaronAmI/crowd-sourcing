<template>
  <div class="cs-login">
    <lrheader></lrheader>
    <div class="bd">
      <div class="col">
        <div class="title">邮箱</div>
        <el-input class="csinput" placeholder="请输入邮箱" v-model="email" clearable></el-input>
      </div>
      <div class="col">
        <div class="title">密码</div>
        <el-input class="csinput" type="password" placeholder="请输入密码" v-model="password" clearable></el-input>
      </div>
      <el-button type="primary" class="btn">登录</el-button>
    </div>

    <div class="goToRegister">
      没有账号？<router-link to="/cs/register">前往注册</router-link>
    </div>
  </div>
</template>

<script>
import lrheader from './lrheader'
export default {
  name: 'login',
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
