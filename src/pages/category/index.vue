<template>
  <div>
    <!--头部 -->
    <tophead></tophead>
    <!-- 主体 -->
    <div class="main">
      <div class="left">
        <div class="item" @click="getlist(index)" :class="{active:selectedIndex == index}"   v-for="(item,index) in catelist" :key="index">{{item.cat_name}}</div>
      </div>
      <div class="right">
        <div>
          <img class="pic" src="https://aecpm.alicdn.com/simba/img/TB13xKuLVXXXXcHapXXSutbFXXX.jpg" alt="">
        </div>
        <div  v-for="(item,index) in rightlist" :key="index">
        <div class="view">
          <span>/</span>{{item.cat_name}}
          <span>/</span>
        </div>
        <div class="boxx">
          <a :href="'/pages/searchlist/main?query='+it.cat_name" class="box" v-for="(it,itindex) in item.children" :key="itindex">
            <img :src="'https://itjustfun.cn/'+it.cat_icon" alt="">
            <p>{{it.cat_name}}</p>
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import tophead from "../../components/tophead";
//引入请求组件
import request from '../../utils/request.js'

export default {
  data(){
    return {
      catelist:[],
      selectedIndex:0,
      rightlist:[]
    }
  },
  methods: {
    getlist(index){
      this.selectedIndex = index;
      this.rightlist = this.catelist[index].children;
    }
  },
 async mounted() {
    let res = await request('https://itjustfun.cn/api/public/v1/categories');
    this.catelist = res.data.data;
    //打开页面给右边赋值
    this.rightlist = this.catelist[this.selectedIndex].children;
    //  console.log(this.catelist);
  },
  //注册组件
  components: {
    tophead
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
