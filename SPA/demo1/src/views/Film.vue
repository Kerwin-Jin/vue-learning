<template>
  <div>
    <div id="brand">猫眼电影</div>
    <film-swiper>
      
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
        // imgUrl:['https://p0.meituan.net/148.208/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg']
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

// https://m.maoyan.com/asgard/asgardapi/media/activity/ad/movie/detail.json?movieId=1299372
// https://m.maoyan.com/asgard/asgardapi/media/activity/ad/movie/detail.json?movieId=1217023