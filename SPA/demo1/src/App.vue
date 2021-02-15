<template>
  <div>
    <!-- 路由容器 -->
    <router-view> </router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/Tabbar.vue";
// 注册全局组件
// import Vue from "vue"
// Vue.component('tabbar',tabbar);

export default {
  data() {
    return {
      info: "轮播图",
    };
  },
  // 注册成局部组件
  components: {
    tabbar: tabbar,
  },
  mounted() {
   
    
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>