<template>
  <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
    <div class="header">个人信息</div>
    <div class="part">
      <div class="demand">
        <div class="name">用户名：</div>
        <div class="value single">{{userInfo.name}}</div>
      </div>
      <div class="demand">
        <div class="name">邮箱：</div>
        <div class="value single">{{userInfo.email}}</div>
      </div>
      <div class="demand">
        <div class="name">身份：</div>
        <div class="value single">{{userInfo.type === 'tester' ? '测试方' : '发包方'}}</div>
      </div>
      <div class="demand">
        <div class="name">积分：</div>
        <div class="value single">{{userInfo.integral}}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    userInfo () {
      return this.$store.getters.doneGetUserInfo
    }
  },
  mounted () {
    this.doFetch()
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    login (val) {
      console.log(val)
    }
  },
  methods: {
    async doFetch () {
      const send = {}
      send.email = this.login.email
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getUserInfo', params: send})
    }
  }

}
</script>
