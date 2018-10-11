<template>
  <div>
    <Header />
    <mt-header title="烂樱桃电影">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>



</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Index',
  componets:{
    Header,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
