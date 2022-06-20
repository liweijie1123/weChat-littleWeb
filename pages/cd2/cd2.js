
var app = getApp();
var x,y,x1,y1,x2,y2,index,currindex,n,yy;
var arr1 = [{content:"临平公园",id:1},{content:"购物中心",id:2},{content:"武林社区",id:3},{content:"莱蒙商业中心",id:4},{content:"人民广场",id:5}];
Page({
    data: {
        mainx:0,
        content:[{content:"临平公园",id:1},{content:"购物中心",id:2},{content:"武林社区",id:3},{content:"莱蒙商业中心",id:4},{content:"人民广场",id:5}],
        start:{x:0,y:0},
        longitude: 120.295509, //地图界面中心的经度
        latitude:30.414387, //地图界面中心的纬度
         markers: [ //标志点的位置
        //位置0-桔子水晶酒店
        {
          id: 0,
          iconPath: "/pages/image/dw1.png",
          latitude: 30.414321,
          longitude: 120.307597,
          width: 28,
          height: 32
        },
        //位置1
        {
          id: 1,
          iconPath: "/pages/image/dw1.png",
          latitude: 30.424497,
          longitude: 120.301544,
          width: 28,
          height: 32
        },
        //位置2
        {
          id: 2,
          iconPath: "/pages/image/dw1.png",
          latitude: 30.417802,
          longitude: 120.294006,
          width: 28,
          height: 32
        },
        //位置3
        {
          id: 3,
          iconPath: "/pages/image/dw1.png",
          latitude: 30.426932,
          longitude: 120.293292,
          width: 28,
          height: 32
        },
        //位置4
        {
          id: 4,
          iconPath: "/pages/image/dw1.png",
          latitude: 30.414641,
          longitude: 120.298325,
          width: 28,
          height: 32
        },
      ]
    },
  
    onLoad: function () {
      var that = this;
  
      wx.getLocation({
        type: "wgs84",
        success: function (res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          console.log("当前位置的经纬度为：", res.latitude, res.longitude);
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude,
  
          })
        }
      })
    },
    onReady: function () {
  
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
      console.log('=bindtapMap=', e)
    },
    movestart:function(e){
        currindex = e.target.dataset.index;
         x = e.touches[0].clientX;
         y = e.touches[0].clientY;
         x1 = e.currentTarget.offsetLeft;
         y1 = e.currentTarget.offsetTop;
        },
        move:function(e){
        yy = e.currentTarget.offsetTop;
        x2 = e.touches[0].clientX-x+x1;
        y2 = e.touches[0].clientY-y+y1;
        this.setData({
         mainx:currindex,
         opacity:0.7,
         start:{x:x2,y:y2}
        })
        },
        moveend:function(){
        if(y2 != 0){
         var arr = [];
         for(var i=0; i<this.data.content.length; i++){
         arr.push(this.data.content[i]);
         }
         var nx = this.data.content.length;
         n=1;
         for(var k=2; k<nx; k++){
         if(y2>(52*(k-1)+k*2-26)){
          n=k;
         }
         }
         if(y2>(52*(nx-1)+nx*2-26)){
         n = nx;
         }
         console.log(arr);
         console.log(arr1)
         arr.splice((currindex-1),1);
         arr.splice((n-1),0,arr1[currindex-1]);
         arr1 = [];
         for(var m=0; m<this.data.content.length; m++){
         console.log(arr[m]);
         arr[m].id = m+1;
         arr1.push(arr[m]);
         }
         // console.log(arr1);
         this.setData({
         mainx:"",
         content:arr,
         opacity:1
         })
        }
        }
  })
  