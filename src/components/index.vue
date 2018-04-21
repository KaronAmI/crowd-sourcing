<template>
  <el-container>
    <el-header class="cs-header" height="60px">
      <h1>众包管理系统</h1>
    </el-header>
    <el-aside width="200px" class="cs-nav">
      <el-menu router class="cs-nav-menu">
        <el-menu-item index="/cs/project">
          <!-- <i class="fa fa-gavel" aria-hidden="true"></i> -->
          <span slot="title">项目大厅</span>
        </el-menu-item>
        <el-menu-item index="/cs/device">
          <!-- <i class="fa fa-mobile" aria-hidden="true"></i> -->
          <span slot="title">添加设备</span>
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
  name: 'index'
}
</script>

<style>

</style>
