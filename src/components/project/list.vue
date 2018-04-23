<template>
  <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
    <div class="header">草稿箱项目列表</div>
    <div class="bd">
      <el-table
        :data="doneProjectsForCustomer"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          label="是否审核">
          <template slot-scope="scope">
            <el-tag type="success" >{{scope.row.isExamine ? '是' : '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="测试时间">
          <template slot-scope="scope">
            {{scope.row.start}} 至 {{scope.row.end}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" :disabled="scope.row.isPublish ? true : false" @click="publish(scope.row)">发布</el-button>
            <el-button size="mini" type="primary" :disabled="scope.row.isPublish ? true : false" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'projectList',
  computed: {
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    donePublish () {
      return this.$store.getters.donePublish
    },
    doneProjectsForCustomer () {
      return this.$store.getters.doneProjectsForCustomer || []
    },
    doneDelProjectByProjectId () {
      return this.$store.getters.doneDelProjectByProjectId
    },
    doneProject () {
      return this.$store.getters.doneProject
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async doFetch () {
      const send = {}
      send.customerId = this.customerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'projectsForCustomer', params: send})
    },
    async edit (project) {
      await this.$store.dispatch('setState', {type: 'project', data: project})
      const send = {}
      send.projectId = project.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    },
    async publish (project) {
      const send = {}
      send.id = project.id
      send.isPublish = true
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'publish', params: send})
      this.refresh()
      if (this.doneProject.id === project.id) {
        project.isPublish = true
      }
    },
    async del (project) {
      const send = {}
      send.projectId = project.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delProjectByProjectId', params: send})
      this.showMsg(this.doneDelProjectByProjectId)
      this.refresh()
      if (this.doneProject.id === project.id) {
        await this.$store.dispatch('setState', {type: 'project', data: ''})
        await this.$store.dispatch('setState', {type: 'getRewardsByProjectId', data: ''})
      }
    },
    async refresh () {
      const send = {}
      send.customerId = this.customerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'projectsForCustomer', params: send})
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
