<template>
  <el-container>
    <el-header class="cs-header" height="60px">
      <h1>众包管理系统</h1>
      <router-link class="cs-logout" to="/cs/login"><el-button type="default" size="mini">退出</el-button></router-link>
    </el-header>
    <el-aside width="200px" class="cs-nav">
      <el-menu router class="cs-nav-menu">
        <el-menu-item index="/cs/projects/1">
          <span slot="title">项目大厅</span>
        </el-menu-item>
        <el-menu-item index="/cs/manageProjects" v-if="isCustomer">
          <span slot="title">发布项目</span>
        </el-menu-item>
        <el-menu-item index="/cs/device" v-if="isTester">
          <span slot="title">添加设备</span>
        </el-menu-item>
        <el-menu-item index="/cs/myApplications" v-if="isTester">
          <span slot="title">我的申请</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="cs-main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  computed: {
    login () {
      return this.$store.getters.doneLogin
    },
    isAdmin () {
      return this.login.type === 'admin'
    },
    isTester () {
      return this.login.type === 'tester'
    },
    isCustomer () {
      return this.login.type === 'customer'
    }
  }
}
</script>
