<template>
  <div class="search_input">
      <input type="text">
      <div class="search">
        <icon type="search" size="14"></icon>
        <span class="ssearch">搜索</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
page{
    padding-top: 100rpx;
}
.search_input{
    padding: 20rpx 16rpx;
    background-color: #ff2d4a;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    input{
        background-color: #fff;
        height: 60rpx;
        border-radius: 5px;
    }
    .search{
        height: 60rpx;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        icon{
           margin-right: 20rpx;
        }
        .ssearch{
            font-size: 16px;
            display: inline-block;
        }
    }
   
}
</style>
