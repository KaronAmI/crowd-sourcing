<template>
  <div class="cs-register">
    <top></top>
    <div class="bd">
      <div class="col">
        <div class="title">昵称</div>
        <el-input placeholder="请输入昵称" v-model="name" clearable></el-input>
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
        <el-select class="csselect" v-model="type" placeholder="请选择类型">
          <el-option value="customer" label="我是发包方"></el-option>
          <el-option value="tester" label="我是测试方"></el-option>
        </el-select>
      </div>
      <div class="col">
        <el-button type="primary" class="btn" @click="addUser" :loading="loading">注册</el-button>
      </div>
    </div>

    <div class="goto">
      已有账号？<router-link to="/cs/login">前往登陆</router-link>
    </div>
  </div>
</template>

<script>
import top from './top'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      type: '',
      loading: false
    }
  },
  components: {
    top
  },
  computed: {
    doneRegister () {
      return this.$store.getters.doneRegister
    }
  },
  methods: {
    async addUser () {
      this.loading = true
      const send = {}
      send.name = this.name
      send.email = this.email
      send.password = this.password
      send.type = this.type
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'register', params: send})
      this.$message({
        message: this.doneRegister.msg,
        type: 'success'
      })
      this.loading = false
    }
  }
}
</script>
