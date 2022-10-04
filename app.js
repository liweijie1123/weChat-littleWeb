// app.js
App({
    globalData:{
        pointList:[]
    },
    onLaunch() {
        var point = [
            {
                latitude: 30.414321,
                longitude: 120.307597,
            },
            {
                latitude: 30.424497,
                longitude: 120.301544,
            },
            {
                latitude: 30.417802,
                longitude: 120.294006,
            },
            {
                latitude: 30.426932,
                longitude: 120.293292,
            },
            {
                latitude: 30.414641,
                longitude: 120.298325,
            }
        ]
        var pointList = []
        wx.request({
            method: 'POST',

            url: 'http://43.142.137.227:8081/selectAllSitewx', //仅为示例，并非真实的接口地址

            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                const {
                    data
                } = res.data
                console.log(JSON.stringify(data))
                data.forEach((item,i) => {
                    pointList.push({
                        text: item.site_name,
                        id: item.site_id,
                        latitude:point[i].latitude,
                        longitude:point[i].longitude
                    })
                })
                console.log(pointList)
            }
        })
        // pointList.push({text:"马牛逼",id:'6'})
        // pointList.push({text:"潘牛逼",id:'7'})
        // pointList.push({text:"陈牛逼",id:'8'})
        this.globalData.pointList = pointList
        console.log(this.globalData)
    },
    watch: function (ctx, obj) {
        Object.keys(obj).forEach(key => {
            this.observer(ctx.data, key, ctx.data[key], function (value) {
                obj[key].call(ctx, value)
            })
        })
    },
    // 监听属性，并执行监听函数
    observer: function (data, key, val, fn) {
        Object.defineProperty(data, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                return val
            },
            set: function (newVal) {
                if (newVal === val) return
                fn && fn(newVal)
                val = newVal
            },
        })
    }

})