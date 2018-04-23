<template>
  <section class="cs-reward">
    <section class="reward-notice">
      <div class="top">备注：</div>
      <div>奖励用于给缺陷定级</div>
    </section>
    <section class="reward-list">
      <div class="top">已添加奖励</div>
      <el-table
        :data="doneRewards"
        border
        style="width: 100%">
        <el-table-column
          prop="grade"
          label="等级"
          width="180">
        </el-table-column>
        <el-table-column
          prop="reward"
          label="奖励"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button :disabled="isDisabled" size="mini" type="danger" icon="el-icon-delete" @click="delReward(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section class="reward-add">
      <div class="top">添加奖励</div>
      <div class="col">
        <div class="title">类型：</div>
        <el-select :disabled="isDisabled" class="select" v-model="grade" placeholder="请选择类型">
          <el-option value="S" label="S"></el-option>
          <el-option value="A" label="A"></el-option>
          <el-option value="B" label="B"></el-option>
          <el-option value="C" label="C"></el-option>
        </el-select>
      </div>
      <div class="col">
        <div class="title">奖励：</div>
        <el-input :disabled="isDisabled" class="input" placeholder="请输入密码" v-model="reward" clearable></el-input>
      </div>
      <div class="col">
        <div class="title"></div>
        <el-button :disabled="isDisabled" plain size="mini" @click="setRewards">添加奖励</el-button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'projectReward',
  data () {
    return {
      grade: '',
      reward: ''
    }
  },
  computed: {
    isDisabled () {
      if (this.doneProject.isPublish) {
        return true
      } else {
        return false
      }
    },
    doneRewards () {
      return this.$store.getters.doneGetRewardsByProjectId
    },
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    doneProject () {
      return this.$store.getters.doneProject
    }
  },
  methods: {
    async setRewards () {
      if (!this.grade || !this.reward) return
      let isIn = false
      for (let i = 0; i < this.doneRewards.length; i++) {
        if (this.doneRewards[i].grade === this.grade) {
          isIn = true
        }
      }
      if (isIn) {
        this.$message({
          message: '该奖励类型已存在',
          type: 'error'
        })
        return
      }
      const send = {}
      send.projectId = this.doneProject.id
      send.customerId = this.customerId
      send.grade = this.grade
      send.reward = this.reward
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addReward', params: send})
      this.refresh()
    },
    async delReward (reward) {
      const send = {}
      send.id = reward.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delReward', params: send})
      this.refresh()
    },
    async refresh () {
      const send = {}
      send.projectId = this.doneProject.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'getRewardsByProjectId', params: send})
    }
  }
}
</script>
