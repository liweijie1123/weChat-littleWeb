// pages/histroy/histroy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        historyTask: [{
                userid: 1,
                date: "2022-06-22",
                street: "甜心街道",
                type: "可回收垃圾"
            },
            {
                userid: 2,
                date: "2022-06-21",
                street: "长安街道",
                type: "厨余垃圾"
            },
            {
                userid: 3,
                date: "2022-06-20",
                street: "雪宫街道",
                type: "其他垃圾"
            },
            {
                userid: 4,
                date: "2022-06-19",
                street: "古陌街道",
                type: "有害垃圾"
            },
            {
                userid: 5,
                date: "2022-06-18",
                street: "雪宫街道",
                type: "其他垃圾"
            },
            {
                userid: 6,
                date: "2022-06-17",
                street: "甜心街道",
                type: "厨余垃圾"
            },
            {
                userid: 7,
                date: "2022-06-16",
                street: "长安街道",
                type: "有害垃圾"
            }
        ],
        title: ['完成时间', '工作街道', '垃圾类型'],
        urls: {
            'Historical completion': '/pages/task_completion/task_completion'
        }
    },
    goto: function () {
        wx.navigateTo({
            url: this.data.urls['Historical completion'],
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
          });
    },
    onLoad() {
        var that = this
        wx.request({
            method: 'POST',

            url: 'http://43.142.137.227:8081/selectAllHistoricalTask', //仅为示例，并非真实的接口地址

            data: {
                car: ''
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                that.setData({
                    historyTask: res.data.data
                })
                console.log(res.data.data)
            }

        })
    }
})