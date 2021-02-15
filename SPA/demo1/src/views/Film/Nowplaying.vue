<template>
    <div>
        <ul>
            <!-- <li>你好李焕英</li>
            <li>唐人街探案三</li>
            <li>新警察故事</li>
            <li>宝贝计划</li> -->
            <li v-for="(item) in dataList" :key="item.id" @click="handleClick(item.id)">
                <img :src="item.img | handleUrl" alt="">
                <div>
                    <h4>{{item.nm}}</h4>
                    <span>观众评{{item.sc}}</span>
                    <span :title="item.star">主演:{{item.star | starFilter}}</span>
                    <span>上映时间:{{item.rt}}</span>
                    <span>{{item.showInfo}}</span>
                </div>
                <div>
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            // dataList:['你好李焕英','唐人街探案三','新警察故事','宝贝计划','武林外传'],
            dataList:[]
        }
    },
    mounted(){
        //1. 直接可以得到数据，没有跨域禁止   http://wthrcdn.etouch.cn/weather_mini?city=北京
        //2. 禁止跨域请求，需要在vue.config.js中做代理配置  https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=D8ECA0F06EE311EB8EA95FD7FC141CDDF355EB6FA6294E6C9A0DBA65F41D99E6&optimus_risk_level=71&optimus_code=10
        //3. 请求头中设置了特殊的字段，发送ajax请求的时候需要带上
        // https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6266173
        // https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6266173
        // axios({
        //   url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6266173",
        // }).then(res=>{
        //   console.log(res);
        // })
      axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=D8ECA0F06EE311EB8EA95FD7FC141CDDF355EB6FA6294E6C9A0DBA65F41D99E6&optimus_risk_level=71&optimus_code=10")
      .then(res=>{
          console.log(res);
          this.dataList = res.data.movieList;
      })
    },
    filters:{
        handleUrl(url){
            // console.log(url.replace(/w.h\//,""));
            // http://p0.meituan.net/w.h/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg
            return url.replace(/w.h\//,"");
        },
        starFilter(starStr){
            return starStr.replace(/,/g," ");
        }
    },
    methods:{
        handleClick(id){
            // console.log(id);

            // 1-路径
            this.$router.push(`/detail/${id}`);         //编程式导航

            // 2-路由名字
            // this.$router.push({
            //     name:'kerwinDetail',
            //     params:{
            //         filmId:id
            //     }
            // })


            // 3-query方式跳转详情
            // this.$router.push(`/detail?filmId=${id}`)
        }
    }
    
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li{
        /* width: inherit; */
        border: 1px solid #000;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px 0;
        text-align: center;
        transition: font-size .2s;
        display: flex;
    }
    ul li div{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: flex-start;
        align-items: flex-start;
    }
    ul li div span{
        line-height: 40px;
    }
    ul li div span{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    ul li:hover{
        background: rgb(63, 101, 224);
        color: white;
        font-size: 20px;
    }
    ul li img{
        width: 200px;
    }
    
</style>