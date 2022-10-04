// logs.js

Page({
  data: {
    car: '',
    driver: '',
    img: [
      '/pages/image/2/mine/car.png', '/pages/image/2/mine/car_number.png', '/pages/image/2/mine/car_id.png',
      '/pages/image/2/mine/type.png', '/pages/image/2/mine/weight.png', '/pages/image/2/mine/fix.png',
      '/pages/image/2/mine/driver02.png', '/pages/image/2/mine/driver.png', '/pages/image/2/mine/job-no.png',
      '/pages/image/2/mine/mask.png', '/pages/image/2/mine/temperature.png', '/pages/image/2/mine/career.png'
    ],
    name:['车牌','ID','类型','车辆核载','车辆检修日期','司机','功耗','口罩','体温','联系方式'],
    modalHidden: true,
    i: 'come',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
    logs: [],
    time: "ss",
    imgs: [],

  },
  startEvent(event) {
    if (event.changedTouches[0].pageX) {
      this.data.startPageX = event.changedTouches[0].pageX
    } else {
      this.data.startPageX = event.changedTouches[0].x
    }
  },
  // 滑动手势结束事件
  endEvent(event) {
    let endPageX = 0
    if (event.changedTouches[0].pageX) {
      endPageX = event.changedTouches[0].pageX
    } else {
      endPageX = event.changedTouches[0].x
    }
    const moveX = endPageX - this.data.startPageX
    if (Math.abs(moveX) < 100) return
    if (moveX > 0) {
      // 右滑
      wx.reLaunch({
        url:'/pages/task/task' ,
    })
     console.log("11") //这里写你的右滑方法
    } else {

      console.log("22")   //这里写你的左滑方法
    }
  },
  onReady: function () {
    console.log("123")
    var that = this
    wx.request({
      method: 'POST',

      url: 'http://43.142.137.227:8081/selectAllVehicle', //仅为示例，并非真实的接口地址

      data: {
        car: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          car: res.data.data
        })
      }
    }),
      wx.request({
        method: 'POST',

        url: 'http://43.142.137.227:8081/selectAllDriver', //仅为示例，并非真实的接口地址

        data: {
          driver: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          that.setData({
            driver: res.data.data
          })
        }
      })
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

  onLoad() {
  }
})
function init() {
  wx.request({
    url: 'pages/yhjb/yhjb',
    data: {},
    success: function (res) {
      that.setData({
        car: res.data.courses
      })
    }
  })
}
init();