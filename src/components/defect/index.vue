<template>
  <div>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="cs-breadcrumb" @click="goback()">返回</div>
    </el-card>
    <simpledetail></simpledetail>
    <list></list>
    <add></add>
  </div>
</template>

<script>
import simpledetail from '@/components/project/simpleDetail.vue'
import list from '@/components/defect/list.vue'
import add from '@/components/defect/add.vue'
import router from '@/router'
export default {
  name: 'defect',
  components: {
    add,
    list,
    simpledetail
  },
  methods: {
    goback () {
      router.go(-1)
    }
  }
}
</script>
