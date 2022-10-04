// pages/rw/rw.js
import Toast from '@vant/weapp/toast/toast';
let plugin = requirePlugin('routePlan');
let key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5'; //使用在腾讯位置服务申请的key
let referer = '司机端ap'; //调用插件的app的名称
let endPoint2 = JSON.stringify({ //终点
  'name': '购物中心',
  'latitude': 30.424634,
  'longitude': 120.30154
});
let endPoint1 = JSON.stringify({ //终点
  'name': '临平公园',
  'latitude': 30.426937,
  'longitude': 120.293265
});
var newdatalist = [
  '', '临平公园', '购物中心', '武陵社区', '莱蒙商业中心', '人民广场'
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "12月13日",
    street: "临平街道",
    rubbish: "厨余垃圾",
    active: -1,
    value: 0,
    steps: '',
    src1: "/pages/image/fi.png",
    src2: "/pages/image/fi.png",
    src3: "/pages/image/fi.png",
    src4: "/pages/image/fi.png",
    src5: "/pages/image/fi.png",
    arr: [],

    curIdx: null,
    i: '9',
    urls: {
      'work1': '/pages/work1/work1',
      'finish': '/pages/finish/finish',
      'history': '/pages/historical_task/historical_task',
      'Set order': '/pages/modify_point_sequence/modify_point_sequence',
      'routine1': 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint1,
      'routine2': 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint2
    },
    listInfo: [{
      imgUrl: '/pages/image/fn.png',
      curUrl: '/pages/image/fi.png',
    }, ],
    modalHidden: true,


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
        url:'/pages/index/index' ,
    })
     console.log("11") //这里写你的右滑方法
    } else {
      // 左滑
      wx.reLaunch({
        url:'/pages/my/my' ,
    })
      console.log("22")   //这里写你的左滑方法
    }
  },
  history: function () {
    wx.navigateTo({
      url: this.data.urls['history'],
    })
  },
  change: function () {
    wx.navigateTo({
      url: this.data.urls['Set order'],
    })
  },
  tack:function(){
    var listLength = this.data.steps.length
    var {active}  = this.data
    var {value} = this.data
    value+=100/listLength;
    active++
    if(active<=listLength-1){
      this.setData({
        active:active,
        value:value
      })
      wx.showToast({
        title: '打卡成功',
        icon: 'success',
        duration: 500
       })
    }
    else {
        wx.showToast({
            title: '已完成所有任务',
            icon: 'error',
            duration: 500
           })
    }
  },
  onShow:function(){
    var app = getApp();
    this.setData({
      steps:app.globalData.pointList
    })
  }
})