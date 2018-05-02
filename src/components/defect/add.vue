<template>
  <el-card class="cs-card cs-card-add" :body-style="{'padding': '0'}">
    <section class="device-main">
      <div class="device-col">
        <div class="name">缺陷名称：</div>
        <div class="value single"><el-input v-model="name" clearable></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">缺陷描述：</div>
        <div class="value">
          <el-input type="textarea" :rows='6' v-model="description" resize="none"></el-input>
        </div>
      </div>
      <div class="device-col">
        <div class="title"></div>
        <!-- <el-button plain size="mini" @click="updateDefect" v-if="id">更新缺陷信息至草稿</el-button> -->
        <el-button plain size="mini" @click="addDefect">保存缺陷信息至草稿</el-button>
      </div>
    </section>
  </el-card>
</template>

<script>
export default {
  name: 'addDefect',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  computed: {
    testerId () {
      return this.$store.getters.doneLogin.id
    },
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneAddDefect () {
      return this.$store.getters.doneAddDefect
    },
    doneGetDefects () {
      return this.$store.getters.doneGetDefects
    }
  },
  methods: {
    async list () {
      const send = {}
      send.projectId = this.projectId
      send.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefects', params: send})
    },
    async addDefect () {
      const defect = {}
      defect.name = this.name
      defect.testerId = this.testerId
      defect.projectId = this.projectId
      defect.description = this.description
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addDefect', params: defect})
      this.showMsg(this.doneAddDefect)
      this.list()
    },
    async updateDefect () {
      const send = {}
      send.defectId = this.defectId
      send.name = this.name
      send.description = this.description
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateDefectById', params: send})
      this.showMsg(this.doneGetDefects)
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
