<template>
  <div>
    <div id="brand">猫眼电影</div>
    <film-swiper>
      <div class="swiper-slide">11144</div>
      <div class="swiper-slide">22255</div>
      <div class="swiper-slide">33366</div>
    </film-swiper>
    <film-header style="position:sticky;top:0;background:#fff;"></film-header>
  
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from "./Film/FilmHeader.vue"
import filmSwiper from "./Film/FilmSwiper.vue"
export default {
  data(){
    return{
     
    }
  },
  components:{
    filmHeader:filmHeader,
    filmSwiper:filmSwiper
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