<template>
  <div class="cs-login">
    <top></top>
    <div class="bd">
      <div class="col">
        <div class="title">邮箱</div>
        <el-input placeholder="请输入邮箱" v-model="email" clearable></el-input>
      </div>
      <div class="col">
        <div class="title">密码</div>
        <el-input type="password" placeholder="请输入密码" v-model="password" clearable></el-input>
      </div>
      <el-button type="primary" class="btn" @click="login" :loading="loading">登录</el-button>
    </div>

    <div class="goto">
      没有账号？<router-link to="/cs/register">前往注册</router-link>
    </div>
  </div>
</template>

<script>
import top from '@/components/login/top'
import router from '@/router'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  components: {
    top
  },
  computed: {
    donelogin () {
      return this.$store.getters.doneLogin
    }
  },
  methods: {
    async login () {
      this.loading = true
      const send = {}
      send.email = this.email
      send.password = this.password
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'login', params: send})
      if (!this.donelogin.error) {
        router.push({path: '/cs/projects'})
      } else {
        this.$message.error(this.donelogin.msg)
      }
      this.loading = false
    }
  }
}
</script>
