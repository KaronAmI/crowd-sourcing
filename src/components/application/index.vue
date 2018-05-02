<template>
  <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
    <div class="header">我的申请列表</div>
    <div class="bd">
      <el-table
        :data="applications"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
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
            <router-link :to="`/cs/project/detail/${scope.row.projectId}`"><el-button size="mini" type="success">项目详情</el-button></router-link>
            <el-button size="mini" type="primary" v-if="scope.row.isPass">填写缺陷报告</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'myApplication',
  mounted () {
    this.doFetch()
  },
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    applications () {
      return this.$store.getters.doneGetApplicationsForTester || []
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
    async doFetch () {
      const send = {}
      send.testerId = this.login.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getApplicationsForTester', params: send})
    },
    async del (application) {
      const send = {}
      send.id = application.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delApplication', params: send})
      this.doFetch()
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
