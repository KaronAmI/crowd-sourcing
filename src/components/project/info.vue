<template>
  <div class="cs-card cs-card-add" :body-style="{'padding': '0'}">
    <section class="device-main">
      <div class="device-col">
        <div class="name">项目名：</div>
        <div class="value"><el-input v-model="name"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">系统要求：</div>
        <div class="value"><el-input v-model="deviceRequirement"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">项目描述</div>
        <div class="value"><el-input v-model="proDesc"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">测试人数</div>
        <div class="value"><el-input v-model="testerNumber"></el-input></div>
      </div>
      <div class="device-col">
        <div class="name">测试时间：</div>
        <div class="value">
          <el-date-picker
            class="project-time-picker"
            v-model="testTime"
            type="daterange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="device-col">
        <div class="name">是否审核：</div>
        <div class="value"><el-input v-model="isExamine"></el-input></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'projectInfo',
  data () {
    return {
      name: '',
      proDesc: '',
      deviceRequirement: '',
      testTime: '',
      testerNumber: '',
      isExamine: '',
    }
  }
}
</script>
