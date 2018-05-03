<template>
  <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
    <div class="header">草稿箱项目列表</div>
    <div class="bd">
      <el-table
        :data="doneGetDefects"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="缺陷名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="description"
          label="缺陷描述"
          width="120">
        </el-table-column>
        <el-table-column
          prop="grade"
          label="等级"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="验收"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" :disabled="scope.row.isCommit ? true : false" @click="commit(scope.row)">提交</el-button>
            <!-- <el-button size="mini" type="primary" :disabled="scope.row.isCommit ? true : false" @click="edit(scope.row)">编辑</el-button> -->
            <el-button size="mini" type="danger" :disabled="scope.row.isCommit ? true : false" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'defectList',
  computed: {
    testerId () {
      return this.$store.getters.doneLogin.id
    },
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneGetDefects () {
      return this.$store.getters.doneGetDefects || []
    },
    doneCommit () {
      return this.$store.getters.doneCommit
    },
    doneProject () {
      return this.$store.getters.doneGetProjectByProjectId || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async project () {
      const send = {}
      send.projectId = this.projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getProjectByProjectId', params: send})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    },
    async doFetch () {
      const send = {}
      send.projectId = this.projectId
      send.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefects', params: send})
    },
    async commit (defect) {
      const send = {}
      send.id = defect.id
      send.isCommit = true
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'commit', params: send})
      this.doFetch()
    },
    async del (defect) {
      const send = {}
      send.defectId = defect.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delDefect', params: send})
      this.doFetch()
    }
  }
}
</script>
