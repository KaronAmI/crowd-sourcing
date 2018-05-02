<template>
  <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
    <div class="header">基本信息</div>
    <div class="part">
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
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'simpleDetail',
  computed: {
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneProject () {
      return this.$store.getters.doneGetProjectByProjectId || []
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
      const send = {}
      send.projectId = this.projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getProjectByProjectId', params: send})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    }
  }
}
</script>

<style>

</style>
