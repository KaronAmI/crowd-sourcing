<template>
  <div>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="cs-breadcrumb" @click="goback()">返回</div>
    </el-card>
    <simpledetail></simpledetail>
    <listreport></listreport>
  </div>
</template>

<script>
import simpledetail from '@/components/project/simpleDetail.vue'
import listreport from '@/components/defect/listReport.vue'
import router from '@/router'
export default {
  name: 'report',
  components: {
    simpledetail,
    listreport
  },
  methods: {
    goback () {
      router.go(-1)
    }
  }
}
</script>
