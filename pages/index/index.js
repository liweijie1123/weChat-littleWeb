// index.js
// 获取应用实例
const app = getApp()
let plugin = requirePlugin('routePlan');
let key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5';  //使用在腾讯位置服务申请的key
let referer = '司机端ap';   //调用插件的app的名称
let endPoint1 = JSON.stringify({  //终点
  'name': '吉野家(北京西站北口店)',
  'latitude': 39.89631551,
  'longitude': 116.323459711
});
Page({
  data: {
    slider: [],
    urls: {
      'sign': '/pages/check/check',
      'news': '/pages/help/help',
      'notice': '/pages/news/news',
      'feedback': '/pages/feedback/feedback',
      'withSubscriptions': true,
      'Navigation': 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint1
    },
    latitude:'',
    longitude:'',
    swiperCurrent: 0,
    gridlist: [],
    i: 'come',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  


  goto1: function () {
    wx.navigateTo({
      url: this.data.urls['sign']
    })
  }, goto2: function () {
    wx.navigateTo({
      url: this.data.urls['news']
    })
  }, goto3: function () {
    wx.navigateTo({
      url: this.data.urls['notice']
    })
  }, goto4: function () {
    wx.navigateTo({
      url: this.data.urls['Navigation']
    });
  }, goto5: function () {
    wx.navigateTo({
      url: this.data.urls['feedback']
    })
  }, goto6: function () {
    wx.openSetting({
      withSubscriptions: this.data.urls['withSubscriptions']
    })
    // wx.navigateTo({
    //   url: '/pages/sz/sz',
    // })
  },
  onLoad(){
    var {latitude} = this.data
    var {longitude} = this.data
    wx.getLocation({
       
        type: 'wgs84',
        success (res) {
            latitude = res.latitude
            longitude = res.longitude
          console.log('纬度' + res.latitude)
          console.log('经度' + res.longitude)
        }
       })
       this.setData({
           latitude:latitude,
           longitude:longitude
       })
  }

})
