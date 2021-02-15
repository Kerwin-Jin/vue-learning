<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" active-class="kerwinactive">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="kerwinactive">
                <i class="iconfont icon-yingyuan"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="kerwinactive">
                <i class="iconfont icon-wode2"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>

<style scoped>
    nav{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 25px;
        background: #fff;
        text-align: center;
        padding: 10px 0;
    }
    nav ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    nav ul li{
        flex: 1;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }
    nav ul li span{
        font-size: 12px;
    }
    nav ul li i{
        font-size: 20px;
    }
    .kerwinactive{
        color: #f40;
    }
</style>