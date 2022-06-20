// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      text:{}
    },
  
  back:function(){
    wx.navigateBack()
  },
  
  //提交
  
  })

  wx.request({
    method: 'POST',
    url: 'http://127.0.0.1:3000/getUser',
    data: {
      "name1": "cxy"
    },
    success: function (res) {
      console.log(res.data);
    },
    fail: function () {
      console.log("获取失败");
    }
  })