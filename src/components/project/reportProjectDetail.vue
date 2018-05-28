<template>
  <div class="cs-card cs-card-preview">
    <div class="top">《{{doneProject.name}} 测试报告》</div>
    <div class="part">
      <div class="title">设备详情</div>
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
    </div>
    <div class="part">
      <div class="title">测试详情</div>
      <div class="demand">
        <div class="name">项目描述：</div>
        <div class="value single">{{doneProject.description}}</div>
      </div>
      <div class="demand">
        <div class="name">测试人数：</div>
        <div class="value single">{{doneProject.name}}</div>
      </div>
      <div class="demand">
        <div class="name">实际申请人数：</div>
        <div class="value single" style="color: green;">{{applicationsForProjectCount}}</div>
      </div>
      <div class="demand">
        <div class="name">测试时间：</div>
        <div class="value single">{{this.doneProject.start | formatTime}} 至 {{this.doneProject.end | formatTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simpleDetail',
  data () {
    return {
      applicationsForProjectCount: 0
    }
  },
  computed: {
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneProject () {
      return this.$store.getters.doneGetProjectByProjectId || []
    },
    getApplicationsForProject () {
      return this.$store.getters.doneGetApplicationsForProject || []
    },
    projectStatus () {
      const now = new Date().getTime()
      const end = new Date(this.doneProject.end).getTime()
      const start = new Date(this.doneProject.start).getTime()
      if (now >= start && now <= end) {
        return '进行中'
      } if (now > end) {
        return '已结束'
      } else {
        return '未开始'
      }
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
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getApplicationsForProject', params: send})

      for (let application of this.getApplicationsForProject) {
        if (application.isPass) {
          this.applicationsForProjectCount += 1
        }
      }
    }
  }
}
</script>
