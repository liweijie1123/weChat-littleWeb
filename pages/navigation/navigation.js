// pages/navigation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        steps:'',
        polyline:'',
        longitude: 120.295509, //地图界面中心的经度
        latitude: 30.414387, //地图界面中心的纬度
        markers:[ {
            id: 4,
            iconPath: "/pages/image/dw1.png",
            latitude: 30.414641,
            longitude: 120.298325,
            width: 28,
            height: 32
          }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var app = getApp()
        this.setData({
            steps:app.globalData.mapPoint.step
        })
        console.log(app.globalData.mapPoint)

    },
    back(){
        wx.navigateBack({
            delta: 1
          });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})