// pages/rw/rw.js
let plugin = requirePlugin('routePlan');
let key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5';  //使用在腾讯位置服务申请的key
let referer = '司机端ap';   //调用插件的app的名称
let endPoint2 = JSON.stringify({  //终点
  'name': '购物中心',
  'latitude': 30.424634,
    'longitude': 120.30154
});
let endPoint1 = JSON.stringify({  //终点
    'name': '临平公园',
    'latitude': 30.426937,
  'longitude': 120.293265
});
Page({

    /**
     * 页面的初始数据
     */
    data: {
      curIdx:null,
      listInfo:[
        {
            imgUrl: '/pages/image/fn.png',
            curUrl: '/pages/image/fi.png',
        },
      ],
      modalHidden: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    goto2:function(){
      wx.navigateTo({
        url: '/pages/work1/work1',
      })
    },
    goto:function(){
      wx.navigateTo({
        url: '/pages/finish/finish',
      })
    },
    gotohis:function(){
      wx.navigateTo({
        url: '/pages/histroy/histroy',
      })
    },
    gotosz:function(){
      wx.navigateTo({
        url: '/pages/cd2/cd2',
      })
    },
    goto1:function(){
      wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint1
    });
  },
  goto11:function(){
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint2
  });
},
  goto2: function() {
    this.setData({
         modalHidden: false
    })
    },
       modalCandel: function() {
        this.setData({
             modalHidden: true
        })
        },
         modalConfirm: function() {
        this.setData({
             modalHidden: true
        })
  },
  showok:function(e) {
    this.setData({
      curIdx: e.currentTarget.dataset.current
    })
    wx.showModal({
      title: '提示',
      content: '是否确认打卡',
      success: function(res) {
          if (res.confirm) {
            wx.showToast({
              title: '打卡成功',
              icon: 'success',
              duration: 2000
          })
          } else if (res.cancel) {
          console.log('用户点击取消')
          }
      }
  })
}
})