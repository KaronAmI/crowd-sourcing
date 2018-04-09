<template>
  <div id="app">
    <el-container>
      <el-header class="cs-header" height="64px">众包任务管理系统</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import './sass/index.scss'
</style>
