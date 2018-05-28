<template>
  <div>
    <div class="cs-card cs-card-preview">
      <div class="part">
        <div class="title">缺陷详情</div>
        <el-table
          :data="doneGetDefectsByReport"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="缺陷名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="description"
            label="缺陷描述"
            width="200">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="等级">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="cs-card cs-card-preview">
      <div class="part">
        <div class="title">统计</div>
        <div class="grade"><span class="name">S：</span><span class="num">{{S}}</span>个</div>
        <div class="grade"><span class="name">A：</span><span class="num">{{A}}</span>个</div>
        <div class="grade"><span class="name">B：</span><span class="num">{{B}}</span>个</div>
        <div class="grade"><span class="name">C：</span><span class="num">{{C}}</span>个</div>
        <div class="grade"><span class="name">共计：</span><span class="num">{{doneGetDefectsByReport.length}}</span>个</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'defectListReport',
  data () {
    return {
      S: 0,
      A: 0,
      B: 0,
      C: 0
    }
  },
  computed: {
    projectId () {
      return this.$store.state.route.params.projectId
    },
    doneGetDefectsByReport () {
      return this.$store.getters.doneGetDefectsByReport || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async doFetch () {
      const send = {}
      send.projectId = this.projectId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefectsByReport', params: send})
      for (let g of this.doneGetDefectsByReport) {
        if (g.grade === 'S') {
          this.S++
        }
        if (g.grade === 'A') {
          this.A++
        }
        if (g.grade === 'B') {
          this.B++
        }
        if (g.grade === 'C') {
          this.C++
        }
      }
    }
  }
}
</script>
