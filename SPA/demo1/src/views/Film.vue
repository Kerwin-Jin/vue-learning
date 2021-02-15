<template>
  <div>
    <div id="brand">猫眼电影</div>
    <div id="sliper">
      <h1>大轮播</h1>
    </div>
    <film-header></film-header>
  
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from "./Film/FilmHeader.vue"
export default {
  data(){
    return{
     
    }
  },
  components:{
    filmHeader
  }
}
</script>

<style scoped>
    #brand {
        width: auto;
        height: 60px;
        line-height: 60px;
        background: #e54847;
        color: #fff;
        padding: 0;
        text-align: center;
        letter-spacing: 2px;
    }
    #sliper {
        width: auto;
        height: 200px;
        border: 1px solid #000;
        padding: 0;
        text-align: center;
    }
    
</style>