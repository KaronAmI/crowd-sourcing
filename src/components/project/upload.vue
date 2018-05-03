<template>
  <section class="cs-card">
    <section class="device-main">
      <div class="fileName" v-if="getProjectByProjectId.fileName || doneProject.fileName">
        已上传的文件：{{getProjectByProjectId.fileName || doneProject.fileName}} <el-button style="margin-left: 20px;" size="mini" @click="download">下载</el-button>
      </div>
      <el-upload
        :multiple="false"
        class="upload-demo"
        :data="{id: doneProject.id}"
        :on-success="success"
        action="http://localhost:8086/api/upload">
        <el-button size="small" plain>点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </section>
  </section>
</template>

<script>
export default {
  name: 'projectUpload',
  computed: {
    doneProject () {
      return this.$store.getters.doneProject
    },
    getProjectByProjectId () {
      return this.$store.getters.doneGetProjectByProjectId
    }
  },
  methods: {
    async project () {
      const send = {}
      send.projectId = this.doneProject.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getProjectByProjectId', params: send})
    },
    async success (response, file, fileList) {
      const send = {}
      send.projectId = this.doneProject.id
      send.appsrc = response.path
      send.fileName = response.fileName
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateProjectAppsrcById', params: send})
      this.project()
    },
    download () {
      window.open(this.getProjectByProjectId.appsrc || this.doneProject.appsrc)
    }
  }
}
</script>
