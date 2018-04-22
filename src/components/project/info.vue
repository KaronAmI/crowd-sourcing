<template>
  <section class="cs-card cs-card-add" :body-style="{'padding': '0'}">
    <section class="device-main">
      <div class="device-col">
        <div class="name">项目名称：</div>
        <div class="value single"><el-input v-model="name" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">手机名要求：</div>
        <div class="value single"><el-input v-model="phoneName" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">系统要求：</div>
        <div class="value single">
          <el-select v-model="os" placeholder="请选择">
            <el-option label="android" value="android"></el-option>
            <el-option label="ios" value="ios"></el-option>
          </el-select>
        </div>
      </div>
      <div class="device-col">
        <div class="name">系统版本要求：</div>
        <div class="value single"><el-input v-model="osVersion" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">项目描述：</div>
        <div class="value">
          <el-input type="textarea" :rows='3' v-model="description" resize="none"></el-input>
        </div>
      </div>
      <div class="device-col">
        <div class="name">测试人数：</div>
        <div class="value single"><el-input v-model="testerNumber" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">测试时间：</div>
        <div class="value single">
          <el-date-picker
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
          <el-radio v-model="isExamine" :label="true">是</el-radio>
          <el-radio v-model="isExamine" :label="false">否</el-radio>
        </div>
      </div>

      <div class="device-col">
        <div class="title"></div>
        <el-button plain size="mini" @click="addProject">保存基本信息至草稿</el-button>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'projectInfo',
  data () {
    return {
      name: '',
      description: '',
      testTime: '',
      testerNumber: '',
      os: '',
      osVersion: '',
      phoneName: '',
      isExamine: true
    }
  },
  computed: {
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    doneProject () {
      return this.$store.getters.doneProject
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
      await this.$store.dispatch('setProject', {type: 'project', data: project})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'project', params: project})

      const send = {}
      send.customerId = this.customerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'projectsForCustomer', params: send})
      
      this.$message({
        message: this.doneProject.msg,
        type: this.doneProject.error ? 'error' : 'success'
      })
    }
  }
}
</script>
