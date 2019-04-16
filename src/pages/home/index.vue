<template>
  <div>
    <!-- 搜索 -->
    <tophead></tophead>
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
      <block v-for="(item,index) in imglist" :key="index">
        <swiper-item>
          <image :src="item.image_src" mode="aspectFill" style="height:340rpx;width:100%" />
        </swiper-item>
      </block>
    </swiper>
    <!-- tab栏 -->
    <div id="tabs">
      <div class="box" v-for="(item,index) in tablist" :key="index">
        <img :src="item.image_src" alt="">
      </div>
    </div>
    <!-- 楼层 -->
    <div class="floor" v-for="(item,index) in floorlist" :key="index">
      <div class="title">
        <img :src="item.floor_title.image_src">
      </div>
      <div class="content">
         <div class="left">
            <img :src="item.product_list[0].image_src">
         </div>
          <div class="right">
             <img  v-for="(it,index12) in item.product_list" :key="index12" v-if="index12 !=0" :src="it.image_src">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
//引入组件
import tophead from '../../components/tophead'
export default {
  data() {
    return {
      imglist: [],
      floorlist:[],
      tablist:[]
    };
  },
  async mounted() {
    //轮播图
   let res = await request("https://itjustfun.cn/api/public/v1/home/swiperdata")
    // console.log(res);
    //结构写法(对象,数组)
    let {data} = res.data;
    this.imglist = data;
     //楼层
    let res1 = await request("https://itjustfun.cn/api/public/v1/home/floordata")
    // console.log(res1);
    this.floorlist = res1.data.data;
    // console.log(this.floorlist);
    //tab栏
    let res2 = await request("https://itjustfun.cn/api/public/v1/home/catitems")
    // console.log(res2);
    this.tablist = res2.data.data;
  },
  
  //注册组件
  components:{
    tophead
  }

};
</script>

<style lang="less">
@import "./index.less";
</style>
