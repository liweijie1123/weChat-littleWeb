var QQMapWX = require('../../qqmap-wx-jssdk');
var qqmapsdk;
import {mapRoute} from '../../utils/map'
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
    directionPoint: async function (list){
        var app = getApp()
        let res  = await mapRoute(list)
        app.globalData.mapPoint = res
        this.setData({
            polyline: [{
                points: res.pointline,
                color: '#00FF00',
                width: 3
              }]
        })
    },
    onShow:  function () {
        var _this = this;
        // Taro.navigateBack() // 或者点击左上
        var app = getApp();
        var pointList = app.globalData.pointList.filter((item)=>{
             return !item.type
        })
        var list = markersPoint(pointList)
        this.setData({
            text: pointList,
            markers:list
        })
        arr1 = pointList
        if(pointList.length>=2)
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
        var pointList = app.globalData.pointList.filter((item)=>{
            return item.type
       })
        var {
            text
        } = this.data
       for(var i = 0;i<pointList.length;i++){
           text.unshift(pointList[i])
       }
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
    let list  = pointList
    var wayPoint=''
    var len = list.length
    if(len===2) return
    list.map((item,i)=>{
        if(i>=1&&i<len-1) wayPoint+=`${item.latitude},${item.longitude};`
    })
    wayPoint = wayPoint.substr(0,wayPoint.length-1)
    return wayPoint
}