// logs.js
const util = require('../../utils/util.js')
const chooseLocation = requirePlugin('chooseLocation');


var timestamp =
 Date.parse(new Date());
//返回当前时间毫秒数
timestamp = timestamp / 1000;
 
 
//获取当前时间
 
var n = timestamp *
  1000;
 
 
var date = new Date(n);
 
 
//年
 
 
var Y =
  date.getFullYear();
 
 
//月
 
 
var M = (date.getMonth()
  + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
 
 
//日
 
 
var D = date.getDate()
  < 10 ? '0' + date.getDate() :
  date.getDate();
 
 
//时
var h =
  date.getHours();
//分
var m =
  date.getMinutes();
//秒
var s =
  date.getSeconds();

Page({
  data: {
    address: "",
    locationName: "",
    modalHidden: true,
    i:'come',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
    logs: [],
    time:"ss",
    imgs: [],
    placeholder: '请选择',
    array: ['发电机', '充电器', '引擎动力', '其他'],
    objectArray: [
      {
        id: 0,
        name: '发电机'
      },
      {
        id: 1,
        name: '充电器'
      },
      {
        id: 2,
        name: '引擎动力'
      },
      {
        id: 3,
        name: '其他'
      }
    ],
 
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
    },
    buttonTap: function() {
      this.setData({
           modalHidden: false
      })
      },
     
      /**
        * 点击取消
        */
       modalCandel: function() {
      // do something
      this.setData({
           modalHidden: true
      })
      },
      /**
        *  点击确认
        */
       modalConfirm: function() {
      // do something
      this.setData({
           modalHidden: true
      }),
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
      },
    chooseImg: function (e) {
      var that = this;
      var imgs = this.data.imgs;
      if (imgs.length >= 9) {
        this.setData({
          lenMore: 1
        });
        setTimeout(function () {
          that.setData({
            lenMore: 0
          });
        }, 2500);
        return false;
      }
      wx.chooseImage({
        // count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var imgs = that.data.imgs;
          // console.log(tempFilePaths + '----');
          for (var i = 0; i < tempFilePaths.length; i++) {
            if (imgs.length >= 9) {
              that.setData({
                imgs: imgs
              });
              return false;
            } else {
              imgs.push(tempFilePaths[i]);
            }
          }
          // console.log(imgs);
          that.setData({
            imgs: imgs
          });
        }
      });
    },
    // 删除图片
    deleteImg: function (e) {
      var imgs = this.data.imgs;
      var index = e.currentTarget.dataset.index;
      imgs.splice(index, 1);
      this.setData({
        imgs: imgs
      });
    },
    // 预览图片
    previewImg: function (e) {
      //获取当前图片的下标
      var index = e.currentTarget.dataset.index;
      //所有图片
      var imgs = this.data.imgs;
      wx.previewImage({
        //当前显示图片
        current: imgs[index],
        //所有图片
        urls: imgs
      })
    },
   
   
   
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    clearFont() {
      this.setData({
        placeholder: ''
      })
    },
   
    bindRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
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
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
        // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
        const location = chooseLocation.getLocation();
        if(location){
            this.setData({
                address: location.address?location.address : "",
                locationName: location.name?location.name : ""
            });
        }
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
    
     this.setData({
      logs: Y + "-" + M + "-" + D,
     });
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return {
    //       date: util.formatTime(new Date(log)),
    //       timeStamp: log
    //     }
    //   })
    // })
  },
  //显示地图
  showMap() {
    //使用在腾讯位置服务申请的key（必填）
    const key = "KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5"; 
    //调用插件的app的名称（必填）
    const referer = "司机端ap"; 
    wx.navigateTo({
        url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
    });
}
})
