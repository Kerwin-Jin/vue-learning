<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" active-class="kerwinactive">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" active-class="kerwinactive">即将上映</router-link>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script>


<style scoped>
    ul{
        list-style: none;
        margin-top: 10px;
        padding: 0;
        display: flex;
    }
    ul li{
        height: 40px;
        flex: 1;
        text-align: center;
        line-height: 40px;
    }
    .kerwinactive{
        /* background: #f40; */
        color: #f40;
        border-bottom: 3px solid #f40;
    }
</style>