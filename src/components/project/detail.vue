<template>
  <div>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="cs-breadcrumb" @click="goback()">返回</div>
    </el-card>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="header">
        项目详情
        <el-button v-if="isTester" @click="apply()" class="cs-card-preview-apply" size="mini" type="success">申请</el-button>
      </div>
      <div class="part">
        <div class="title">基本信息</div>
        <div class="demand">
          <div class="name">项目名称：</div>
          <div class="value single">{{doneProject.name}}</div>
        </div>
        <div class="demand">
          <div class="name">手机名要求：</div>
          <div class="value single">{{doneProject.phoneName}}</div>
        </div>
        <div class="demand">
          <div class="name">系统要求：</div>
          <div class="value single">{{doneProject.os}}</div>
        </div>
        <div class="demand">
          <div class="name">系统版本要求：</div>
          <div class="value single">{{doneProject.osVersion}}</div>
        </div>
        <div class="demand">
          <div class="name">项目描述：</div>
          <div class="value single">{{doneProject.description}}</div>
        </div>
        <div class="demand">
          <div class="name">测试人数：</div>
          <div class="value single">{{doneProject.name}}</div>
        </div>
        <div class="demand">
          <div class="name">测试时间：</div>
          <div class="value single">{{this.doneProject.start | formatTime}} 至 {{this.doneProject.end | formatTime}}</div>
        </div>
        <div class="demand">
          <div class="name">是否审核：</div>
          <div class="value single">{{doneProject.isExamine}}</div>
        </div>
      </div>

      <div class="part">
        <div class="title">奖励信息</div>
        <div class="table">
          <el-table
            :data="doneRewards"
            border
            style="width: 100%">
            <el-table-column
              prop="grade"
              label="等级">
            </el-table-column>
            <el-table-column
              prop="reward"
              label="奖励">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'projectDetail',
  computed: {
    projectId () {
      return this.$store.state.route.params.id
    },
    doneProject () {
      return this.$store.getters.doneGetProjectByProjectId || []
    },
    doneRewards () {
      return this.$store.getters.doneGetRewardsByProjectId || []
    },
    login () {
      return this.$store.getters.doneLogin
    },
    isTester () {
      return this.login.type === 'tester'
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
    },
  },
  methods: {
    goback () {
      router.go(-1)
    },
    async doFetch () {
      const send = {}
      send.projectId = this.projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getProjectByProjectId', params: send})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    },
    async apply () {
      const send = {}
      send.projectId = +this.projectId
      send.testerId = this.login.id
      send.auditTime = new Date()
      const isExamine = this.doneProject.isExamine
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
