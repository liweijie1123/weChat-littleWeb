// index.js
// 获取应用实例
const app = getApp()
let plugin = requirePlugin('routePlan');
let key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5';  //使用在腾讯位置服务申请的key
let referer = '司机端ap';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
    'name': '吉野家(北京西站北口店)',
    'latitude': 39.89631551,
    'longitude': 116.323459711
});
Page({
  data: {
    slider: [],
    uu1:'/pages/kq/kq',
    uu2:'/pages/dl/dl',
    uu3:'/pages/tongz/tongz',
    uu4:'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint,
    uu5:'/pages/fk/fk',
    uu6:'/pages/kq/kq',
    swiperCurrent: 0,
    gridlist:[],  
    i:'come',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  goto1:function(){
    wx.navigateTo({
      url: this.data.uu1,
    })
},goto2:function(){
  wx.navigateTo({
    url: this.data.uu2,
  })
},goto3:function(){
  wx.navigateTo({
    url: this.data.uu3,
  })
},goto4:function(){
  wx.navigateTo({
    url: this.data.uu4
});
},goto5:function(){
  wx.navigateTo({
    url: this.data.uu5,
  })
},goto6:function(){
  wx.openSetting({
    withSubscriptions: true,
  })
  // wx.navigateTo({
  //   url: '/pages/sz/sz',
  // })
},

})
