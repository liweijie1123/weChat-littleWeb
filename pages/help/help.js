// pages/dl/dl.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text: [
            '1.小程序首页', '2.司机可在首页考勤处进行每日签到打卡', '3.司机可通过首页消息处查看消息', '4.首页具有单独的导航功能',
            '5.司机可在首页的反馈处反馈工作中遇到的问题', '6.司机在此处查看小程序授权情况', '7.司机工作界面', '8.点位右侧第一个按钮将为司机进入路线规划页面'
            , '9.司机可点击点位右侧第二个按钮确认完成作业点', '10.工作界面下方能查看历史任务界面', '11.工作界面下方能修改当天任务点位顺序',
            '12.司机可在我的页面查看车辆信息和自己的信息'
        ],
        img: [
            'https://s2.loli.net/2022/03/20/DY5NXrmo8HEpV1x.png', 'https://s2.loli.net/2022/03/20/mzSx5XDsVNdo41C.png'
            , 'https://s2.loli.net/2022/03/20/x7qzDHabYL8dGk1.png', 'https://s2.loli.net/2022/03/20/RGtje2ipWDxk5TV.png'
            , 'https://s2.loli.net/2022/03/20/5pjaiCVuId4wZ3X.png', 'https://s2.loli.net/2022/03/20/xZeKYPwGBavjdk3.png'
            , 'https://s2.loli.net/2022/03/20/rBoxcLW2X517Ik3.png', 'https://s2.loli.net/2022/03/20/KYPIzmrCwd8JEfO.png'
            , 'https://s2.loli.net/2022/03/20/twnqU6miX2aH8lV.png', 'https://s2.loli.net/2022/03/20/LZ1dJqIpUWNuShE.png'
            , 'https://s2.loli.net/2022/03/20/UowyJgQNMidvrCR.png', 'https://s2.loli.net/2022/03/20/prjKG1yZBIe6UNA.png'
            , 'https://s2.loli.net/2022/03/20/uaVyTiglj4HZSGp.png', 'https://s2.loli.net/2022/03/20/uaVyTiglj4HZSGp.png'
        ]
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

    }
})
function init() {
    wx.request({
        url: 'pages/yhjb/yhjb',
        data: {},
        success: function (res) {
            that.setData({
                text: res.data.courses
            })
        }
    })
}
init();