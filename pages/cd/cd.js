// pages/cd/cd.js
// const key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5'; //使用在腾讯位置服务申请的key
// const referer = '司机端ap'; //调用插件的app的名称
// const location = JSON.stringify({
//   latitude: 39.89631551,
//   longitude: 116.323459711
// });
// const category = '生活服务,娱乐休闲';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.switchTab({
        //     url: "/pages/work/work",
        //   })
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
        // wx.navigateTo({
        //     url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location+ '&category=' + category
        //   });
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
    getLocation: function () {
        var _this = this;
        wx.chooseLocation({
          success: function (res) {
            var name = res.name
            var address = res.address
            var tude = res.latitude+','+res.longitude
            _this.setData({
              address_name: name,
              address: address,
              tude: tude
            })
          },
          complete(r) {
            console.log(r)
            console.log(222)
          }
        })
      }
})