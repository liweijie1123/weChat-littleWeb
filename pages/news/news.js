// pages/xx/xx.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        urls: {
            'Timeout docking': '/pages/overtime_parking/overtime_parking',
            'Overspeed alarm': '/pages/overspeed_alarm/overspeed_alarm',
            'User report': '/pages/user_report/user_report',
            'Oil leak alarm': '/pages/oil_leak_alarm/oil_leak_alarm'
        },
        navbar: ['作业', '通知'],
        currentTab: 0
    },


    navbarTap: function (e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    }
    , goto1: function () {
        wx.navigateTo({
            url: this.data.urls['Timeout docking']
        })
    }, back(){
        wx.navigateBack({
            delta: 1
          });
    },goto2: function () {
        wx.navigateTo({
            url: this.data.urls['Overspeed alarm']
        })
    }, goto3: function () {
        wx.navigateTo({
            url: this.data.urls['User report']
        })
    }, goto4: function () {
        wx.navigateTo({
            url: this.data.urls['Oil leak alarm']
        })
    }
})