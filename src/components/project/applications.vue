<template>
  <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
    <div class="header">项目申请列表</div>
    <div class="bd">
      <el-table
        :data="applications"
        border
        style="width: 100%">
        <el-table-column
          prop="projectName"
          label="项目名称"
          width="120">
        </el-table-column>
        <el-table-column
          label="是否通过"
          width="100">
          <template slot-scope="scope">
            <el-tag type="success" >{{scope.row.isPass ? '是' : '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="userName"
          label="测试人员姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="integral"
          label="该测试者的积分"
          width="120">
        </el-table-column>
        <el-table-column
          label="项目状态"
          width="120">
          <template slot-scope="scope">
            <el-tag type="primary">{{scope.row.projectStatus}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="测试时间"
          width="120">
          <template slot-scope="scope">
            {{scope.row.start | formatTime}} 至 {{scope.row.end | formatTime}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" :disabled="scope.row.isOutTime" @click="del(scope.row)">删除</el-button>
            <el-button size="mini" type="success" :disabled="scope.row.isOutTime" @click="pass(scope.row)">{{scope.row.isPass ? '不通过' : '通过'}}</el-button>
            <el-button size="mini" type="warning" :disabled="scope.row.isSettle && scope.row.isOutTime" v-if="scope.row.isOutTime" @click="settle(scope.row)">{{scope.row.isSettle? '已结算' : '结算'}}</el-button>
            <router-link style="margin-left:10px;" :to="`/cs/check/defect/${scope.row.projectId}/${scope.row.testerId}`"><el-button size="mini" type="primary" v-if="scope.row.isPass">查看缺陷报告</el-button></router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { formatApplicationsForProject } from '@/utils'
export default {
  name: 'projectApplications',
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    applications () {
      return formatApplicationsForProject(this.$store.getters.doneGetApplicationsForProject) || []
    },
    delApplication () {
      return this.$store.getters.doneDelApplication
    },
    updateApplication () {
      return this.$store.getters.doneUpdateApplication
    },
    defectsBySettle () {
      return this.$store.getters.doneGetDefectsBySettle
    },
    rewardsBySettle () {
      return this.$store.getters.doneGetRewardsByProjectId
    },
    userInfo () {
      return this.$store.getters.doneGetUserInfo
    },
    updateApplicationSettle () {
      return this.$store.getters.doneUpdateApplicationBySettle
    }
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
    async getApplications (projectId) {
      const send = {}
      send.projectId = projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getApplicationsForProject', params: send})
    },
    async del (application) {
      const send = {}
      send.id = application.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delApplication', params: send})
      this.getApplications(application.projectId)
      this.showMsg(this.delApplication)
    },
    async pass (application) {
      const send = {}
      send.id = application.id
      send.isPass = !application.isPass
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateApplication', params: send})
      this.getApplications(application.projectId)
      this.showMsg(this.updateApplication)
    },
    async getRewards (application) {
      const send = {}
      send.projectId = application.projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    },
    async getDefectsBySettle (application) {
      const send = {}
      send.projectId = application.projectId
      send.testerId = application.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefectsBySettle', params: send})
    },
    async getUserInfo (email) {
      const send = {}
      send.email = email
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getUserInfo', params: send})
    },
    async updateIntegralByUserId (id, integral) {
      const send = {}
      send.userId = id
      send.integral = integral
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateIntegral', params: send})
    },
    async updateApplicationBySettle (id) {
      const send = {}
      send.isSettle = true
      send.id = id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateApplicationBySettle', params: send})
    },
    async settle (application) {
      if (application.isSettle) return
      let testerIntegral = 0
      await this.getDefectsBySettle(application)
      await this.getRewards(application)
      for (let d of this.defectsBySettle) {
        for (let i = 0; i < this.rewardsBySettle.length; i++) {
          if (this.rewardsBySettle[i].grade === d.grade) {
            testerIntegral += this.rewardsBySettle[i].reward
            break
          }
        }
      }
      await this.getUserInfo(this.login.email)
      const customerIntegral = this.userInfo.integral
      const curtomerIntegralSurplus = customerIntegral - testerIntegral

      await this.updateIntegralByUserId(application.testerId, application.integral + testerIntegral)
      await this.updateIntegralByUserId(this.login.id, curtomerIntegralSurplus)
      await this.updateApplicationBySettle(application.id)
      this.showMsg(this.updateApplicationSettle)
      application.isSettle = true
      this.getApplications(application.projectId)
    },
    showMsg (msg) {
      this.$message({
        message: msg.msg,
        type: msg.error ? 'error' : 'success'
      })
    }
  }
}
</script>
