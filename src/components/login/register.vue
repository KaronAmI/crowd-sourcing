<template>
  <div class="cs-register">
    <lrheader></lrheader>
    <div class="bd">
      <div class="col">
        <div class="title">昵称</div>
        <div><el-input class="csinput" placeholder="请输入昵称" v-model="email" clearable></el-input></div>
      </div>
      <div class="col">
        <div class="title">邮箱</div>
        <div><el-input class="csinput" placeholder="请输入邮箱" v-model="email" clearable></el-input></div>
      </div>
      <div class="col">
        <div class="title">密码</div>
        <div><el-input class="csinput" type="password" placeholder="请输入密码" v-model="password" clearable></el-input></div>
      </div>
      <!-- <div class="col">
        <div class="title">类型</div>
        <el-radio-group v-model="userType" size="medium">
          <el-radio-button label="发包方">发包方</el-radio-button>
          <el-radio-button label="测试人员">测试人员</el-radio-button>
        </el-radio-group>

      </div> -->
      <div class="col">
        <el-button type="primary" class="btn">注册</el-button>
      </div>
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
      userType: '发包方'
    }
  },
  components: {
    lrheader
  }
}
</script>

<style>

</style>
