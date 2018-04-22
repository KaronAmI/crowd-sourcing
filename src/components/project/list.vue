<template>
  <el-card class="cs-card cs-card-list" :body-style="{'padding': '0'}">
    <div class="header">项目编辑列表</div>
    <div class="bd">
      <el-table
        :data="doneProjectsForCustomer"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          label="是否审核">
          <template slot-scope="scope">
            <el-tag type="success" >{{scope.row.isExamine ? '是' : '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="测试时间">
          <template slot-scope="scope">
            {{scope.row.start}} 至 {{scope.row.end}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" :disabled="scope.row.isPublish ? true : false">发布</el-button>
            <el-button size="mini" type="primary" :disabled="scope.row.isPublish ? true : false" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'project',
  computed: {
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    doneProjectsForCustomer () {
      return this.$store.getters.doneProjectsForCustomer || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    async doFetch () {
      const send = {}
      send.customerId = this.customerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'projectsForCustomer', params: send})
    },
    async edit (project) {
      this.$store.dispatch('setProject', {type: 'project', data: project})
    }
  }
}
</script>
