
Page({
    data: {
        address: "",
        locationName: ""
    },
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
});