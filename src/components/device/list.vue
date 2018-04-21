<template>
  <el-card class="cs-device-card cs-device-list" :body-style="{'padding': '0'}">
    <section class="device-header">已添加的设备</section>
    <section class="device-main">
      <el-table
        :data="devices"
        border
        style="width: 100%">
        <el-table-column
          label="序号">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="设备名">
        </el-table-column>
        <el-table-column
          prop="os"
          label="系统">
        </el-table-column>
        <el-table-column
          prop="osVersion"
          label="系统版本">
        </el-table-column>
        <el-table-column
          prop="manufacturer"
          label="厂商">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="delDevice(scope)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </el-card>
</template>

<script>
export default {
  name: 'deviceList',
  computed: {
    devices () {
      return this.$store.getters.doneDeviceForTester || []
    },
    testerId () {
      return this.$store.getters.doneLogin.id
    },
    delDeviceByDeviceId () {
      return this.$store.getters.doneDelDeviceByDeviceId
    }
  },
  mounted () {
    this.fetchDevices()
  },
  methods: {
    async delDevice (device) {
      const send = {}
      send.deviceId = device.row.id
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'delDeviceByDeviceId', params: send})
      this.fetchDevices()
      this.$message({
        message: this.delDeviceByDeviceId.msg,
        type: this.delDeviceByDeviceId.error ? 'error' : 'success'
      })
    },
    async fetchDevices () {
      const tester = {}
      tester.testerId = this.testerId
      await this.$store.dispatch('fetchByMethod', {method: 'post', type: 'deviceForTester', params: tester})
    }
  }
}
</script>
