<template>
  <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
    <div class="header">项目详情</div>
    <div class="part">
      <div class="title">基本信息</div>
      <div class="demand">
        <div class="name">项目名称：</div>
        <div class="value single">{{doneGetProjectByProjectId.name}}</div>
      </div>
      <div class="demand">
        <div class="name">手机名要求：</div>
        <div class="value single">{{doneGetProjectByProjectId.phoneName}}</div>
      </div>
      <div class="demand">
        <div class="name">系统要求：</div>
        <div class="value single">{{doneGetProjectByProjectId.os}}</div>
      </div>
      <div class="demand">
        <div class="name">系统版本要求：</div>
        <div class="value single">{{doneGetProjectByProjectId.osVersion}}</div>
      </div>
      <div class="demand">
        <div class="name">项目描述：</div>
        <div class="value single">{{doneGetProjectByProjectId.description}}</div>
      </div>
      <div class="demand">
        <div class="name">测试人数：</div>
        <div class="value single">{{doneGetProjectByProjectId.name}}</div>
      </div>
      <div class="demand">
        <div class="name">测试时间：</div>
        <div class="value single">{{doneGetProjectByProjectId.start}} - {{doneGetProjectByProjectId.end}}</div>
      </div>
      <div class="demand">
        <div class="name">是否审核：</div>
        <div class="value single">{{doneGetProjectByProjectId.isExamine}}</div>
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
</template>

<script>
export default {
  name: 'projectDetail',
  computed: {
    doneGetProjectByProjectId () {
      return this.$store.getters.doneGetProjectByProjectId || []
    },
    doneRewards () {
      return this.$store.getters.doneGetRewardsByProjectId || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async doFetch () {
      const projectId = this.$store.state.route.params.id
      const send = {}
      send.projectId = projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getProjectByProjectId', params: send})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    }
  }
}
</script>
