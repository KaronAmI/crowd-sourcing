<template>
  <div>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="cs-breadcrumb" @click="goback()">返回</div>
    </el-card>
    <div class="cs-report-detail">
      <reportprojectdetail></reportprojectdetail>
      <listreport></listreport>
    </div>
  </div>
</template>

<script>
import reportprojectdetail from '@/components/project/reportProjectDetail.vue'
import listreport from '@/components/defect/listReport.vue'
import router from '@/router'
export default {
  name: 'report',
  components: {
    reportprojectdetail,
    listreport
  },
  methods: {
    goback () {
      router.go(-1)
    }
  }
}
</script>
