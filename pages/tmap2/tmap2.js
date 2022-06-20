// pages/tmap/tmap.js
let plugin = requirePlugin('routePlan');
let key = 'KHMBZ-6QVE5-FTCI6-QTYJY-AJHWH-47BB5';  //使用在腾讯位置服务申请的key
let referer = '司机端ap';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
    'name': '临平公园',
    'latitude': 30.426937,
    'longitude': 120.293265
});
// let mode="walking";
Page({
    data: {

    },
    onLoad: function (e) {
        wx.switchTab({
          url: '/pages/index/index'
        })
    },
    onShow: function (e) {
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
            // url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });
    }
})