<template>
    <div>
        <h3>影片详情页</h3>
        <h4>{{filmId}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            filmId:''
        }
    },
    mounted(){

        console.log("利用请求的id通过ajax来获取后端的数据",this.$route.params.filmId);
        this.filmId = this.$route.params.filmId;
        
        // 通过query方式传递
        // console.log("利用请求的id通过ajax来获取后端的数据",this.$route.query.filmId);
    }
}
</script>

<style scoped>

</style>