<template>
  <div class="main">
    <header id="article-header">
      <div class="article-header-img-wrapper">
        <img class="article-img" src="http://www.jl.gov.cn/zw/yw/jlyw/201807/W020180720242813864654.jpg">
      </div>
      <div class="back" @click="goBack"></div>
    </header>
    <div id="article">
      <p class="title">{{item.title}}</p>
      <p class="content" v-for="val in textArr">{{val.replace(/^\s*/, "")}}</p>
    </div>
  </div>
</template>

<script>
  import Api from './common/api.js';
  import Util from './common/Util.js';
  export default {
    name: 'detial',
    data () {
      return {
        Util: Util
      }
    },
    computed: {
      item(){
        var item = this.$route.params && this.$route.params.item
        if (item) {
          Util.setStorage('item', item);
        } else {
          item = Util.getStorage('item');
        }
        return item;
      },
      textArr(){
        return Util.changeLine(this.item.text);
      },
    },
    mounted(){

    },
    destroyed(){
      Util.removeStorage('item');
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    /*  */
  }
</style>
