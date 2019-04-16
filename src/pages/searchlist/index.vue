<template>
  <div>
    <!-- 头部 -->
    <div class="search_input">
      <input type="text">
      <div class="search">
        <icon type="search" size="14"></icon>
        <span class="ssearch">{{query}}</span>
      </div>
    </div>
    <!-- tab栏 -->
    <div class="tab">
      <div
        @click="seletedindex = index"
        :class="{active:seletedindex == index}"
        v-for="(item,index) in tablist"
        :key="index"
      >综合</div>
    </div>
    <!-- 列表 -->
    <div class="goodslist">
      <div class="box" v-for="(item,index) in listdata" :key="index">
        <div class="left">
          <img :src="item.goods_small_logo" alt>
        </div>
        <div class="right">
          <div class="title">{{item.goods_name}}</div>
          <div class="price">
            <span>$</span>
            <span>{{item.goods_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js";

export default {
  data() {
    return {
      tablist: ["综合", "综合", "综合"],
      seletedindex: 0,
      query: "",
      listdata: [],
      pagenum: 1,
      pagesize: 10,
      isEnd: false
    };
  },
  methods: {
    async getdata() {
      //导航栏加载
      wx.showNavigationBarLoading();
      //判断上拉是否请求完
      if (this.isEnd) {
        //提示
        wx.showToast({
          title: "没有更多数据了",
          icon: "none",
          duration: 1000
        });
        return false;
      }
      

      var url = "https://itjustfun.cn/api/public/v1/goods/search";
      let res = await request.get(url, {
        query: this.query,
        pagesize: this.pagesize,
        pagenum: this.pagenum
      });
      //判断是否还有数据
      if (res.data.data.goods.length == 0) {
        //修改状态
        this.isEnd = true;
        wx.showToast({
          title: "没有更多数据了",
          icon: "none",
          duration: 1000
        });
        return false;
      }
      console.log(res);
      // 判断
      if (this.listdata.length == 0) {
        this.listdata = res.data.data.goods;
      } else {
        this.listdata = this.listdata.concat(res.data.data.goods);
      }

      //关闭上拉动画
      wx.hideLoading();
      //关闭下拉刷新
      wx.stopPullDownRefresh();
      //关闭导航栏
      wx.hideNavigationBarLoading({
        success: function() {
          wx.showToast({
            title: "成功",
            icon: "success",
            duration: 1000
          });
        }
      });
    }
  },
  mounted() {
    this.query = this.$root.$mp.query.query;
    this.getdata();
  },
  //上拉加载
  onReachBottom() {
    this.pagenum = this.pagenum + 1;
    this.getdata();
  },
  //下拉刷新
  onPullDownRefresh() {
    this.listdata = [];
    this.pagenum = 1;
    this.isEnd = false;
    this.getdata();
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
