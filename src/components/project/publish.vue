<template>
  <el-row :gutter="10" class="cs-project-publishProjects" :loading="loading">
    <el-col class="publishProject" :span="8" v-for="opp in donePublishProjects" :key="opp.name">
      <el-card>
        <div class="info">
          <div class="col"><span class="title">项目名称：</span><div class="value">{{opp.name}}</div></div>
          <div class="col"><span class="title">系统要求：</span><div class="value">{{opp.os}}</div></div>
          <div class="col"><span class="title">系统版本要求：</span><div class="value">{{opp.osVersion}}</div></div>
          <div class="col"><span class="title">手机名要求：</span><div class="value">{{opp.phoneName}}</div></div>
          <div class="col"><span class="title">测试人数：</span><div class="value">{{opp.testerNumber}}</div></div>
          <div class="col"><span class="title">发布时间：</span><div class="value">{{opp.releaseTime | formatTime}}</div></div>
          <div class="col opr">
            <router-link :to="`/cs/project/detail/${opp.id}`"><el-button size="mini">详情</el-button></router-link>
            <el-button size="mini" type="success" v-if="isTester" @click="apply(opp.id, opp.isExamine)">申请</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'publishProject',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    isAdmin () {
      return this.login.type === 'admin'
    },
    isTester () {
      return this.login.type === 'tester'
    },
    isCustomer () {
      return this.login.type === 'customer'
    },
    donePublishProjects () {
      return this.$store.getters.donePublishProjects || []
    },
    doneAddApplication () {
      return this.$store.getters.doneAddApplication || []
    }
  },
  mounted () {
    this.doFetch()
  },
  filters: {
    formatTime (time) {
      if (!time) return
      let date = ''
      let Y = ''
      let M = ''
      let D = ''
      if (time) {
        date = new Date(time)
        Y = date.getFullYear()
        M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}/` : `0${date.getMonth() + 1}/`
        D = date.getDate() < 10 ? `0${date.getDate()}/` : `${date.getDate()}/`
      }
      return M + D + Y
    }
  },
  methods: {
    async doFetch () {
      this.loading = true
      await this.$store.dispatch('fetchByMethod', {method: 'get', type: 'publishProjects'})
      this.loading = false
    },
    async apply (projectId, isExamine) {
      const send = {}
      send.projectId = projectId
      send.testerId = this.login.id
      send.auditTime = new Date()
      send.isPass = !isExamine
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addApplication', params: send})
      this.$message({
        message: this.doneAddApplication.msg,
        type: this.doneAddApplication.error ? 'error' : 'success'
      })
    }
  }
}
</script>
