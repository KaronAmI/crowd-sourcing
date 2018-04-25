<template>
  <section class="cs-card cs-card-add" :body-style="{'padding': '0'}">
    <section class="device-main">
      <div class="device-col">
        <div class="name">项目名称：</div>
        <div class="value single"><el-input :disabled="isDisabled" v-model="name" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">手机名要求：</div>
        <div class="value single"><el-input :disabled="isDisabled" v-model="phoneName" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">系统要求：</div>
        <div class="value single">
          <el-select :disabled="isDisabled" v-model="os" placeholder="请选择">
            <el-option label="android" value="android"></el-option>
            <el-option label="ios" value="ios"></el-option>
          </el-select>
        </div>
      </div>
      <div class="device-col">
        <div class="name">系统版本要求：</div>
        <div class="value single"><el-input :disabled="isDisabled" v-model="osVersion" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">项目描述：</div>
        <div class="value">
          <el-input :disabled="isDisabled" type="textarea" :rows='3' v-model="description" resize="none"></el-input>
        </div>
      </div>
      <div class="device-col">
        <div class="name">测试人数：</div>
        <div class="value single"><el-input :disabled="isDisabled" v-model="testerNumber" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">测试时间：</div>
        <div class="value single">
          <el-date-picker
            :disabled="isDisabled"
            class="project-time-picker"
            v-model="testTime"
            type="daterange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="device-col">
        <div class="name">是否审核：</div>
        <div class="value single">
          <el-radio :disabled="isDisabled" v-model="isExamine" :label="true">是</el-radio>
          <el-radio :disabled="isDisabled" v-model="isExamine" :label="false">否</el-radio>
        </div>
      </div>
      <div class="device-col">
        <div class="title"></div>
        <el-button :disabled="isDisabled" plain size="mini" @click="updateProject" v-if="id">更新基本信息至草稿</el-button>
        <el-button :disabled="isDisabled" plain size="mini" @click="addProject" v-else>保存基本信息至草稿</el-button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'projectInfo',
  data () {
    const projectTemp = this.$store.getters.doneProject
    const testTime = [projectTemp.start, projectTemp.end]
    return {
      id: projectTemp.id || '',
      name: projectTemp.name || '',
      description: projectTemp.description || '',
      testTime: testTime || '',
      testerNumber: projectTemp.testerNumber || '',
      os: projectTemp.os || '',
      osVersion: projectTemp.osVersion || '',
      phoneName: projectTemp.phoneName || '',
      isExamine: true
    }
  },
  computed: {
    isDisabled () {
      if (this.doneProject.isPublish) {
        return true
      } else {
        return false
      }
    },
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    doneProject () {
      return this.$store.getters.doneProject
    },
    doneUpdateProject () {
      return this.$store.getters.doneUpdateProject
    }
  },
  watch: {
    doneProject (val) {
      const testTime = [val.start, val.end]
      this.id = val.id
      this.name = val.name
      this.description = val.description
      this.testTime = testTime
      this.testerNumber = val.testerNumber
      this.os = val.os
      this.osVersion = val.osVersion
      this.phoneName = val.phoneName
    }
  },
  methods: {
    async addProject () {
      const project = {}
      project.name = this.name
      project.customerId = this.customerId
      project.description = this.description
      project.start = this.testTime[0]
      project.end = this.testTime[1]
      project.os = this.os
      project.osVersion = this.osVersion
      project.phoneName = this.phoneName
      project.testerNumber = this.testerNumber
      project.isExamine = this.isExamine
      project.isPublish = false
      await this.$store.dispatch('setState', {type: 'project', data: project})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'project', params: project})
      this.showMsg(this.doneProject)
      this.refresh()
    },
    async updateProject () {
      const project = {}
      project.id = this.id
      project.name = this.name
      project.customerId = this.customerId
      project.description = this.description
      project.start = this.testTime[0]
      project.end = this.testTime[1]
      project.os = this.os
      project.osVersion = this.osVersion
      project.phoneName = this.phoneName
      project.testerNumber = this.testerNumber
      project.isExamine = this.isExamine
      project.isPublish = false
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateProject', params: project})
      await this.$store.dispatch('setState', {type: 'project', data: project})
      this.showMsg(this.doneUpdateProject)
      this.refresh()
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
