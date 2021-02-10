<template>
  <div id="app">
    <router-view></router-view>
    <el-button>el-button</el-button>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
