<template>
  <div>
    <div class="box">
      <swiper indicator-dots autoplay>
        <block v-for="(item,index) in [1,1,1]" :key="index">
          <swiper-item>
            <image class="img" src="https://gw.alicdn.com/tfs/TB11iC2uAzoK1RjSZFlXXai4VXa-254-318.jpg" />
          </swiper-item>
        </block>
      </swiper>
      <div class="price">
        <span>$</span>
        <span>279</span>
      </div>
      <div class="desc">
        <div class="left">金色猫眼时间刻度搭配纤长双针简约复古。</div>
        <div class="right">收藏</div>
      </div>
      <div class="run">快递:免运费</div>
      <div class="selltotal">
        <div class="title">
          <span>促销</span>
          <span>满200</span>
        </div>
        <div class="car">
          <div class="boxx">练习客服</div>
          <div class="boxx">练习客服</div>
          <div class="boxx">练习客服</div>
          <div class="boxx">练习客服</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "./index.less";
</style>
