<template>
  <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}" v-if="news.length">
    <div class="header">推送列表</div>
    <div class="part">
      <el-table
        :data="news"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称"
          width="200">
        </el-table-column>
        <el-table-column
          label="审核"
          width="60">
          <template slot-scope="scope">
            <el-tag type="success" >{{scope.row.isExamine ? '是' : '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="os"
          label="系统"
          width="80">
        </el-table-column>
        <el-table-column
          prop="osVersion"
          label="系统版本"
          width="80">
        </el-table-column>
        <el-table-column
          prop="phoneName"
          label="手机"
          width="80">
        </el-table-column>
        <el-table-column
          prop="testerNumber"
          label="人数要求"
          width="80">
        </el-table-column>
        <el-table-column
          label="项目状态"
          width="80">
          <template slot-scope="scope">
            <el-tag type="primary">{{scope.row.projectStatus}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="测试时间">
          <template slot-scope="scope">
            {{scope.row.start | formatTime}} 至 {{scope.row.end | formatTime}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <router-link :to="`/cs/project/detail/${scope.row.id}`"><el-button size="mini" type="primary">项目详情</el-button></router-link>
            <el-button size="mini" type="success" @click="apply(scope.row)" :disabled="scope.row.projectStatus === '未开始'">申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'news',
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    userInfo () {
      return this.$store.getters.doneGetUserInfo
    },
    news () {
      return this.$store.getters.doneNews || []
    },
    devices () {
      return this.$store.getters.doneDeviceForTester || []
    },
    doneAddApplication () {
      return this.$store.getters.doneAddApplication || []
    },
    getNews () {
      return this.$store.getters.doneGetNewsByUserId || []
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
      await this.fetchNews()
      await this.fetchDevices()
    },
    async fetchNews () {
      const user = {}
      user.userId = this.login.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getNewsByUserId', params: user})
      for (let news of this.getNews) {
        const project = JSON.parse(news.content)
        await this.$store.dispatch('setState', {type: 'news', data: project})
      }
    },
    async apply ({id, isExamine, os, osVersion, phoneName}) {
      let isOk = false
      for (let i = 0; i < this.devices.length; i++) {
        if (this.devices[i].os === os &&
          this.devices[i].osVersion === osVersion &&
          this.devices[i].name === phoneName) {
          isOk = true
        }
      }
      if (!isOk) {
        this.$message({
          message: '您无满足的设备进行测试，请添加后再进行申请',
          type: 'error'
        })
        return
      }
      const send = {}
      send.projectId = id
      send.testerId = this.login.id
      send.auditTime = new Date()
      send.isPass = !isExamine
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addApplication', params: send})
      this.$message({
        message: this.doneAddApplication.msg,
        type: this.doneAddApplication.error ? 'error' : 'success'
      })
    },
    async fetchDevices () {
      const tester = {}
      tester.testerId = this.login.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'deviceForTester', params: tester})
    }
  }

}
</script>
