<template>
  <div class="main">
    <!-- header区域 -->
    <header title="index">
      <img src="../assets/images/logo.png" alt="logo" title="logo">
      <h1 class="header-title">吉林新闻应用</h1>
      <p class="header-desc">Latest News</p>

      <div class="back" @click="goBack"></div>
    </header>
    <div id="box">
      <a @click="linkToDetial(item)" v-for="item in list" class="main-item clearfix" href="javascript:;">
        <img class="main-item-img" src="http://www.jl.gov.cn/zw/yw/jlyw/201807/W020180720242813864654.jpg">
        <div class="main-item-text">
          <p class="main-item-title">{{item.title}}</p>
          <p class="main-item-desc">{{Util.strHandle(item.text)}}</p>
          <div class="main-item-bottom">
            <span class="main-item-type">{{item.author}}</span>
            <span class="main-item-time">{{Util.getDate(item.publishDate)}}</span>
            <span class="main-item-read">{{item.readNum}}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import Api from './common/api.js';
  import Util from './common/Util.js';
  export default {
    name: 'main',
    data () {
      return {
        list: [],
        Util: Util
      }
    },
    mounted(){
      this.getData();
    },
    computed: {

    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      getData(){
        Api.get('/news.json', {}, (data) => {
          this.list = data.data;
        }, (err) => {
          console.error(err);
        })
      },
      linkToDetial(item){
        this.$router.push({
          name: 'detial',
          params: {
            item: item
          }
        })
      },
      getDate: Util.getDate,
      strHandle: Util.strHandle,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    /*  */
  }
</style>
