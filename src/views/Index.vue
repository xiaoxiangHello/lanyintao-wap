<template>
  <div>
    <Header />
    <mt-header title="烂樱桃电影">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-swipe :auto="4000" style="margin-top:5px;">
      <mt-swipe-item v-for="item in swipeList">
        <router-link to="/">
          <img :src="item.url" height="200px;" width="100%;"/>
          <p style="position:absolute;z-index:2;top:120px;left:32%;color:white;"><b>{{item.title}}</b></p>
        </router-link>
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
import API from '@/components/api/index.js'
import Header from '@/components/Header.vue'

export default {
  name: 'Index',
  componets:{
    Header,
    API,
  },
  props: {
    msg: String
  },
  data(){
    return{
      pageName:"烂樱桃(电影网)",
      swipeList:[],
    }
  },
  metaInfo(){
    return{
      title:this.pageName
    }
  },
  mounted(){
    this.getSwipeList();
  },
  methods:{
    getSwipeList(){
      this.$jsonp(API.FOCUS_LIST,{})
      .then(json => {
          console.log(json);
          this.swipeList = json.data;
      }).catch(err => {

      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    height:200px;
  }
  .mint-swipe-item{
    color:red;
  }
</style>
