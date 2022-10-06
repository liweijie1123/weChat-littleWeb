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
      'Navigation': '/pages/navigation/navigation'
    },
    polyline:[],
    longitude: 120.295509, //地图界面中心的经度
    latitude: 30.414387, //地图界面中心的纬度
    markers: [ //标志点的位置
      //位置0-桔子水晶酒店
      {
        id: 0,
        iconPath: "/pages/image/dw1.png",
        latitude: 30.414321,
        longitude: 120.307597,
        width: 28,
        height: 32
      },
     
    ],
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
  
  bindtapMap() {
    wx.navigateTo({
        url:'/pages/modify_point_sequence/modify_point_sequence' ,
    })
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
   
     console.log("11") //这里写你的右滑方法
    } else {
      // 左滑
      wx.reLaunch({
        url:'/pages/task/task' ,
    })
      console.log("22")   //这里写你的左滑方法
    }
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
  onLoad:  function (){
    var {latitude} = this.data
    var {longitude} = this.data
    console.log(this.data.markers)
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
       this.showPoint()
  },
  onShow:  function (){
    this.showPoint()
    this.shwoline()
  },
  shwoline(){
    var app = getApp();
    const {mapPoint} = app.globalData
    console.log()
    this.setData({
        polyline: [{
            points: app.globalData.mapPoint.pointline,
            color: '#00FF00',
            width: 3
          }]
    })
  },
  showPoint(){

    var app = getApp();
    var pointList = app.globalData.pointList.filter((item)=>{
        return !item.type
   })
    var list = markersPoint(pointList)
    this.setData({
        text: pointList,
        markers:list
    })

  }
})
let markersPoint=(pointList)=>{
    var newList=[]
    pointList.map((item,i)=>{
        newList.push({
            id:i,
            iconPath:`../image/f${i+1}.png`,
            latitude: item.latitude,
            longitude: item.longitude,
            width: 28,
            height: 32
        })
    })
    return newList
}