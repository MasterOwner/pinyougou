//封装一个请求
let request = function (url,method='get',data={},header={}) { 
    return new Promise((resolve,reject)=>{
        //上拉刷新
      wx.showLoading({
        title: "加载中"
      });
        wx.request({
          url:url,
          method:method,
          data:data,
          header:header,
          success:function(res){
              //上拉刷新
       wx.hideLoading();
              resolve(res)
          },
          fail:function(res){
              reject(res)
          }
        
        })
    })
 }

 //封装一个get方法

 request.get = function(url,data){
     return request(url,"get",data,{})
 }

 export default request