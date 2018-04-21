<template>
  <el-card class="cs-card cs-card-add" :body-style="{'padding': '0'}">
    <section class="device-header">添加设备</section>
    <section class="device-main">
      <div class="device-col">
        <div class="name">设备名：</div>
        <div class="value"><el-input v-model="name"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">系统：</div>
        <div class="value">
          <el-select v-model="os" placeholder="请选择">
            <el-option label="android" value="android"></el-option>
            <el-option label="ios" value="ios"></el-option>
          </el-select>
        </div>
      </div>
      <div class="device-col">
        <div class="name">系统版本：</div>
        <div class="value"><el-input v-model="osVersion"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">厂商：</div>
        <div class="value"><el-input v-model="manufacturer"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name"></div>
        <div class="value"><el-button type="primary" @click="addDevice" :loading="loading">添加</el-button></div>
      </div>
    </section>
  </el-card>
</template>

<script>
export default {
  name: 'deviceAdd',
  data () {
    return {
      name: '',
      os: 'ios',
      osVersion: '',
      manufacturer: '',
      loading: false
    }
  },
  computed: {
    doneAddDevice () {
      return this.$store.getters.doneAddDevice
    },
    testerId () {
      return this.$store.getters.doneLogin.id
    }
  },
  methods: {
    async addDevice () {
      this.loading = true
      const send = {}
      send.name = this.name
      send.os = this.os
      send.osVersion = this.osVersion
      send.manufacturer = this.manufacturer
      send.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'addDevice', params: send})
      this.$message({
        message: this.doneAddDevice.msg,
        type: this.doneAddDevice.error ? 'error' : 'success'
      })
      this.loading = false
      if (!this.doneAddDevice.error) {
        const tester = {}
        tester.testerId = this.testerId
        await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'deviceForTester', params: tester})
      }
    }
  }
}
</script>
