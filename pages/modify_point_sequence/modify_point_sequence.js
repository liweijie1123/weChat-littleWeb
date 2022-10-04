var QQMapWX = require('../../qqmap-wx-jssdk');
var qqmapsdk;
var x, y, x1, y1, x2, y2, index, currindex, n, yy;
var arr, arr1;
Page({
    data: {
        mainx: 0,
        text: '',
        datalist: [],
        start: {
            x: 0,
            y: 0
        },
        polyline:'',
        longitude: 120.295509, //地图界面中心的经度
        latitude: 30.414387, //地图界面中心的纬度
        markers:[ {
            id: 4,
            iconPath: "/pages/image/dw1.png",
            latitude: 30.414641,
            longitude: 120.298325,
            width: 28,
            height: 32
          }]
    },
    directionPoint(list){
        var listlen = list.length
        var _this = this
        var config = {
            mode: 'driving',
            from: '',
            to: '',
            waypoints:'',
            success: function (res) {
                var ret = res;
                var coors = ret.result.routes[0].polyline,
                    pl = [];
                var kr = 1000000;
                for (var i = 2; i < coors.length; i++) {
                    coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
                }
                for (var i = 0; i < coors.length; i += 2) {
                    pl.push({
                        latitude: coors[i],
                        longitude: coors[i + 1]
                    })
                }
                _this.setData({
                    polyline: [{
                      points: pl,
                      color: '#00FF00',
                      width: 3
                    }]
                  })
                }
        }
        config.from={
            latitude: list[0].latitude,
            longitude: list[0].longitude,
        }
        config.to={
            latitude: list[listlen-1].latitude,
            longitude: list[listlen-1].longitude,
        }
        config.waypoints=wayPoints(list)
        qqmapsdk.direction(config)
    },
    onShow:  function () {
        var _this = this;
        // Taro.navigateBack() // 或者点击左上
        var app = getApp();
        const {
            pointList
        } = app.globalData
        var list = markersPoint(pointList)
        this.setData({
            text: pointList,
            markers:list
        })
        arr1 = pointList
        this.directionPoint(list)
    },
    onLoad: function () {
        qqmapsdk = new QQMapWX({
            key: '5JDBZ-34KYU-BBQV5-BKHJE-EQYKE-4RF5Z'
        });
      
    },
    onReady: function () {},
    onUnload: function () {
        var app = getApp()
        const {
            text
        } = this.data
        app.globalData.pointList = text
        console.log(text)
    },
    /**
     * 地图放大缩小事件触发
     * @param {*} e 
     */
    bindregionchange(e) {
        console.log('=bindregiοnchange=', e)
    },

    /**
     * 点击地图事件，有经纬度信息返回
     * @param {*} e 
     */
    bindtapMap(e) {

    },
    movestart: function (e) {
        currindex = e.target.dataset.index;
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        x1 = e.currentTarget.offsetLeft;
        y1 = e.currentTarget.offsetTop;
    },
    move: function (e) {
        yy = e.currentTarget.offsetTop;
        x2 = e.touches[0].clientX - x + x1;
        y2 = e.touches[0].clientY - y + y1;
        this.setData({
            mainx: currindex,
            opacity: 0.7,
            start: {
                x: x2,
                y: y2
            }
        })
    },
    moveend: function () {
        if (y2 != 0) {
            arr = [];
            for (var i = 0; i < this.data.text.length; i++) {
                arr.push(this.data.text[i]);
            }
            var nx = this.data.text.length;
            n = 1;
            for (var k = 2; k < nx; k++) {
                if (y2 > (52 * (k - 1) + k * 2 - 26)) {
                    n = k;
                }
            }
            if (y2 > (52 * (nx - 1) + nx * 2 - 26)) {
                n = nx;
            }
            // console.log(arr);
            // console.log(arr1)
            arr.splice((currindex - 1), 1);
            arr.splice((n - 1), 0, arr1[currindex - 1]);
            arr1 = [];
            for (var m = 0; m < this.data.text.length; m++) {
                arr[m].id = m + 1;
                arr1.push(arr[m]);
            }
            var list = markersPoint(arr1)
            this.setData({
                mainx: '',
                text: arr1,
                opacity: 1,
                markers:list
            })
            this.directionPoint(arr1)
        }
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
// waypoints:'30.414321,120.307597;30.424497,120.301544;30.417802,120.294006',

let wayPoints=(pointList)=>{
    var waypointshead = ''
    var waypointsbody = ''
    var waypointsfoot = ''
    var len = pointList.length
    pointList.map((item,i)=>{
       if(i===1) waypointshead = `${item.latitude},${item.longitude};`
       if(i===len-2) waypointsfoot=`${item.latitude},${item.longitude}`
       else if(i>1&&i<len-2) waypointsbody =`${item.latitude},${item.longitude};`
    })
 
    return waypointshead+waypointsbody+waypointsfoot
}