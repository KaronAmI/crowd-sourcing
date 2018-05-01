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
          label="测试时间"
          width="120">
          <template slot-scope="scope">
            {{scope.row.start | formatTime}} 至 {{scope.row.end | formatTime}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="del(scope.row)">删除</el-button>
            <el-button size="mini" type="success" :disabled="scope.row.isPass ? true : false" @click="del(scope.row)">通过该测试人员的申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'projectApplications',
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    applications () {
      return this.$store.getters.doneGetApplicationsForProject || []
    },
    delApplication () {
      return this.$store.getters.doneDelApplication
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
    showMsg (msg) {
      this.$message({
        message: msg.msg,
        type: msg.error ? 'error' : 'success'
      })
    }
  }
}
</script>
