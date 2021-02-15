<template>
  <div>Center</div>
</template>

<script>
export default {
  //局部路由守卫
  beforeRouteEnter(to, from, next) {
          
      // ...
      if (!localStorage.getItem("token")) {
        console.log("无token!");
        next("/login"); //next传参数表示到参数的页面，不传参数就是默认放行
      } else {
        next();
      }
  },

  mounted() {
    //center页面没有token不让进，有什么解决方法吗？
    //解决方法1：
    //如果没有token值就重定向到login页面
    // if(!localStorage.getItem("token")){
    //     this.$router.push("/login")
    //     return;
    // }
    // console.log(localStorage.getItem("token"));
    //-------------------------------------------------------------
    //解决方法2：路由守卫（分为全局守卫和局部守卫）
  },
};
</script>