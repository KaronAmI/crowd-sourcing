<template>
  <div>
    <el-card class="cs-card cs-card-preview" :body-style="{'padding': '0'}">
      <div class="cs-breadcrumb" @click="goback()">返回</div>
    </el-card>
    <simpledetail></simpledetail>
    <el-card class="cs-card cs-card-add padding-40-0" :body-style="{'padding': '0'}"  v-if="doneGetDefectsByCustomer.length">
      <section class="cs-defect-part" v-for="(defect, index) in doneGetDefectsByCustomer" :key="defect.id">
        <div class="header">缺陷 {{index + 1}}：</div>
        <div class="col"><span class="name">缺陷名：</span><p>{{defect.name}}</p></div>
        <div class="col"><span class="name">缺陷内容：</span><p>{{defect.description}}</p></div>
        <div class="col"><span class="name">当前状态：</span><p>{{defect.status}}</p></div>
        <div class="col"><span class="name">更新状态：</span>
          <el-select v-model="defect.status" placeholder="请选择">
            <el-option label="未处理" value="未处理"></el-option>
            <el-option label="通过" value="通过"></el-option>
            <el-option label="驳回" value="驳回"></el-option>
          </el-select>
        </div>
        <div class="col" v-if="defect.status === '通过'">
          <span class="name">评级：</span>
          <el-select v-model="defect.grade" placeholder="请选择">
            <el-option :label="reward.grade" :value="reward.grade" v-for="reward in doneRewards" :key="reward.id"></el-option>
          </el-select>
        </div>
      </section>
      <section class="cs-defect-part cs-defect-part-footer">
        <el-button class="commit" plain size="mini" type="primary" @click="appraisal">提交鉴定</el-button>
      </section>
    </el-card>
  </div>
</template>

<script>
import simpledetail from '@/components/project/simpleDetail.vue'
import router from '@/router'
export default {
  name: 'check',
  data () {
    return {
      value_1: ''
    }
  },
  components: {
    simpledetail
  },
  computed: {
    projectId () {
      return this.$store.state.route.params.projectId
    },
    testerId () {
      return this.$store.state.route.params.testerId
    },
    doneGetDefectsByCustomer () {
      return this.$store.getters.doneGetDefectsByCustomer || []
    },
    doneUpdateDefectById () {
      return this.$store.getters.doneUpdateDefectById
    },
    doneRewards () {
      return this.$store.getters.doneGetRewardsByProjectId || []
    }
  },
  mounted () {
    this.doFetch()
  },
  methods: {
    goback () {
      router.go(-1)
    },
    async doFetch () {
      const send = {}
      send.projectId = this.projectId
      send.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getDefectsByCustomer', params: send})
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    },
    async appraisal () {
      let error = false
      for (let i = 0; i < this.doneGetDefectsByCustomer.length; i++ ) {
        await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'updateDefectById', params: this.doneGetDefectsByCustomer[i]})
        error = this.doneUpdateDefectById.error
        if (error) {
          break
        }
      }
      if (error) {
        const msg = {}
        msg.msg = '网络错误'
        msg.error = true
        this.showMsg(msg)
      } else {
        const msg = {}
        msg.msg = '鉴定成功'
        msg.error = false
        this.showMsg(msg)
      }
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
