<template>
  <el-card class="cs-card cs-card-add" :body-style="{'padding': '0'}" v-if="doneProject">
    <el-steps class="cs-project-steps" :active="active" finish-status="success">
      <el-step title="步骤 1" description="填写项目基本信息"></el-step>
      <el-step title="步骤 2" description="设置奖励信息"></el-step>
      <el-step title="步骤 3" description="上传测试包"></el-step>
    </el-steps>
    <el-main class="cs-project-main">
      <div class="project-step" v-if="active === 1">
        <info></info>
      </div>
      <div class="project-step" v-else-if="active === 2">
        <reward></reward>
      </div>
      <div class="project-step" v-else>
        <upload></upload>
      </div>
    </el-main>
    <div class="cs-project-footer">
      <el-button type="primary" style="margin-top: 12px;" @click="next">{{active === 3 ? '完成' : '下一步'}}</el-button>
    </div>
  </el-card>
</template>

<script>
import info from '@/components/project/info'
import reward from '@/components/project/reward'
import upload from '@/components/project/upload'

export default {
  name: 'project',
  components: {
    info,
    reward,
    upload
  },
  data () {
    return {
      active: 1
    }
  },
  computed: {
    doneProject () {
      return this.$store.getters.doneProject
    }
  },
  methods: {
    next () {
      if (this.active < 3) {
        this.active += 1
      }
      if (this.active === 2) {
        // this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addProject', params: this.doneProject})
      }
    }
  }
}
</script>
