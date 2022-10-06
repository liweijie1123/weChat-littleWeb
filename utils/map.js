var QQMapWX = require('../qqmap-wx-jssdk')
var qqmapsdk
qqmapsdk = new QQMapWX({
    key: '5JDBZ-34KYU-BBQV5-BKHJE-EQYKE-4RF5Z'
})

export const mapRoute= (list)=>{
    var pointObj = {}
    var listlen = list.length
    return new Promise((resolve)=>{
        qqmapsdk.direction(
        {  mode: 'driving',
        from: {
            latitude: list[0].latitude,
            longitude: list[0].longitude,
        },
        to: {
            latitude: list[listlen-1].latitude,
            longitude: list[listlen-1].longitude,
        },
        waypoints:wayPoints(list),
        success:  function (res) {
            
            var ret = res;
            pointObj.step=ret.result.routes[0].steps
            var coors = ret.result.routes[0].polyline
            var pl = [];
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
           pointObj.pointline=pl
           resolve(pointObj)
        }})
    }) 

}

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