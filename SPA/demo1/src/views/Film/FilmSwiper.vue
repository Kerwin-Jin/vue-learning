<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination">111111</div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/swiper-bundle.min.css"
export default {
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
    div{
        height: 200px;
        background: cornflowerblue;
    }
</style>