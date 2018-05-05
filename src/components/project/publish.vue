<template>
  <div>
    <div class="cs-search">
      <el-input v-model="search" placeholder="请输入内容项目名、系统类别或者手机名称" clearable @clear="doFetch"></el-input>
      <el-button type="primary" @click="searchProject">搜索</el-button>
    </div>
    <el-row :gutter="10" class="cs-project-publishProjects" :loading="loading">
      <el-col class="publishProject" :span="8" v-for="opp in all" :key="opp.name" v-if="opp.isInTime">
        <el-card>
          <div class="info">
            <div class="col"><span class="title">项目名称：</span><div class="value">{{opp.name}}</div></div>
            <div class="col"><span class="title">系统要求：</span><div class="value">{{opp.os}}</div></div>
            <div class="col"><span class="title">系统版本要求：</span><div class="value">{{opp.osVersion}}</div></div>
            <div class="col"><span class="title">手机名要求：</span><div class="value">{{opp.phoneName}}</div></div>
            <div class="col"><span class="title">测试人数：</span><div class="value">{{opp.testerNumber}}</div></div>
            <div class="col">
              <span class="title">测试时间：</span>
              <div class="value">
                {{opp.start | formatTime}} - {{opp.end | formatTime}}
              </div>
            </div>
            <div class="col"><span class="title">发布时间：</span><div class="value">{{opp.releaseTime | formatTime}}</div></div>
            <div class="col opr">
              <router-link :to="`/cs/project/detail/${opp.id}`"><el-button size="mini">详情</el-button></router-link>
              <el-button size="mini" type="success" v-if="isTester" @click="apply(opp)">申请</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { formatPublishProjects } from '@/utils'
export default {
  name: 'publishProject',
  data () {
    return {
      all: [],
      search: '',
      loading: false
    }
  },
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    isAdmin () {
      return this.login.type === 'admin'
    },
    isTester () {
      return this.login.type === 'tester'
    },
    isCustomer () {
      return this.login.type === 'customer'
    },
    donePublishProjects () {
      return formatPublishProjects(this.$store.getters.donePublishProjects) || []
    },
    doneAddApplication () {
      return this.$store.getters.doneAddApplication || []
    },
    devices () {
      return this.$store.getters.doneDeviceForTester || []
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
      this.loading = true
      await this.$store.dispatch('fetchByMethod', {method: 'get', type: 'publishProjects'})
      this.all = formatPublishProjects(this.$store.getters.donePublishProjects)
      await this.fetchDevices()
      this.loading = false
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
    },
    async searchProject () {
      if (!this.search) {
        this.doFetch()
        return
      }
      const send = {}
      send.keyWord = this.search
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'searchProjects', params: send})
      this.all = formatPublishProjects(this.$store.getters.doneSearchProjects)
    }
  }
}
</script>
