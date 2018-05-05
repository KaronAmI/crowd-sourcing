<template>
  <div>
    <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
      <div class="header">草稿箱项目列表</div>
      <div class="bd">
        <el-table
          :data="doneGetDefectsByReport"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="缺陷名称">
          </el-table-column>
          <el-table-column
            prop="description"
            label="缺陷描述">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="等级"
            width="80">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
      <div class="header">统计</div>
      <div class="bd">
        <div>共计：{{doneGetDefectsByReport.length}} 个</div>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'defectListReport',
  computed: {
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneGetDefectsByReport () {
      return this.$store.getters.doneGetDefectsByReport || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async doFetch () {
      const send = {}
      send.projectId = this.projectId
      send.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefectsByReport', params: send})
    }
  }
}
</script>
