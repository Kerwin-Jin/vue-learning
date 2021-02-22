<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in imgUrl" :key="data">
                <!-- <div :style='background:imgUrl[0]'></div> -->
                <!-- <img :src="data" alt="" style="width:400px;"> -->
                <div :style="{backgroundImage:'url('+data+')'}" style="background-size:cover;height:200px;"></div>
            </div>
            <!-- <div class="swiper-slide"></div>
            <div class="swiper-slide"></div> -->
            <!-- <slot></slot> -->
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.min.css"
export default {
    data(){
        return{
            imgUrl:[
                'http://p0.meituan.net/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg',
                'http://p1.meituan.net/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg',
                'http://p0.meituan.net/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg'
            ]
        }
    },
    mounted(){
        var a = new Swiper(".swiper-container",{
            pagination:{
                el:'.swiper-pagination'
            }
        });
    }
}
</script>

<style scoped>
    .swiper-container{
        height: 200px;
    }
    
</style>