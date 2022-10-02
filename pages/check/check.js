import Toast from '@vant/weapp/toast/toast';
const monthArry1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthArry2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Page({
    data: {
        show: false,
        minDate: '',
        maxDate: '',
        year: '',
        month: '',
        formatter(day){
            const date  =day.date.getDate()
            day.text = date
            return day
        },
        checkedList:[
            {month:9,date:1},
            {month:9,date:2},
            {month:9,date:3},
            {month:9,date:4},
            {month:8,date:4},
        ],
        checkDay:0
        
    },
    before: function () {
        const {
            year
        } = this.data;
        const {
            month
        } = this.data;
        var date = beforeChangeDate(year, month);
        this.setData({
            minDate: date.date[0],
            maxDate: date.date[1],
            month: date.month,
            year: date.year
        })
    },
    after: function () {
        const {
            year
        } = this.data;
        const {
            month
        } = this.data;
        var date = afterChangeDate(year, month);
        console.log(date)
        this.setData({
            minDate: date.date[0],
            maxDate: date.date[1],
            month: date.month,
            year: date.year
        })
    },
    back(){
        wx.navigateBack({
            delta: 1
          });
    },
    onLoad() {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const {checkedList} = this.data
        const starDay = 1;
        const endDay = chooseLastDay(year, month);
        console.log(endDay, month)
        this.setData({
            minDate: new Date(year, month, starDay).getTime(),
            maxDate: new Date(year, month, endDay).getTime(),
            year: year,
            month: month,
            formatter(e){
               return checkDate(e,checkedList)
            },
            checkDay:cnum(checkedList)
        })
    },
    selectDate(e){
        var {checkedList} = this.data
        const day = new Date()
        const month = e.detail.getMonth()+1
        const date = e.detail.getDate()
        const listObj = {month:month,date:date}
        const {checkDay} = this.data
        console.log(checkedList)
        if(month===day.getMonth()+1&&date===day.getDate()){
        checkedList.push(listObj)
        
        this.setData({
            checkedList:checkedList,
            formatter(e){
                return checkDate(e,checkedList)
            },
            checkDay:checkDay+1
        })
        Toast.success('打卡成功');
    }else{
        Toast.fail('未在规定时间');
    }
    }

});

let beforeChangeDate = (year, month) => {
    var dateArr = [0, 0];
    var arry = monthArry1;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        arry = monthArry2;
    }
    month = month - 1;
    if (month === -1) {
        var arry = monthArry1;
        year = year - 1;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            arry = monthArry2;
        }
        month = 11;
        var date1 = new Date(year, month, 1).getTime();
        var date2 = new Date(year, month, arry[month]).getTime();
        dateArr[0] = date1;
        dateArr[1] = date2;
        return {
            date: dateArr,
            year: year,
            month: month
        };
    } else {
        var day = arry[month];
        var date1 = new Date(year, month, 1).getTime();
        var date2 = new Date(year, month, day).getTime();
        dateArr[0] = date1;
        dateArr[1] = date2;
        return {
            date: dateArr,
            year: year,
            month: month
        };
    }
}
let afterChangeDate = (year, month) => {

    var dateArr = [0, 0];
    var arry = monthArry1;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        arry = monthArry2;
    }
    month = month + 1;
    if (month === 12) {
        var arry = monthArry1;
        year = year + 1;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            arry = monthArry2;
        }
        month = 0;
        var date1 = new Date(year, month, 1).getTime();
        var date2 = new Date(year, month, arry[month]).getTime();
        dateArr[0] = date1;
        dateArr[1] = date2;
        return {
            date: dateArr,
            year: year,
            month: month
        };
    } else {
        var day = arry[month];
        var date1 = new Date(year, month, 1).getTime();
        var date2 = new Date(year, month, day).getTime();
        dateArr[0] = date1;
        dateArr[1] = date2;
        return {
            date: dateArr,
            year: year,
            month: month
        };
    }
}
let chooseLastDay = (year, month) => {
    var arry = monthArry1;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        arry = monthArry2;
    }
    return arry[month];
}

let checkDate=(e,checkedList)=>{
    const date = e.date.getDate()
    const month = e.date.getMonth() + 1;
    e.text =date
    checkedList.map((item)=>{
        if(month===item.month&&date===item.date){
            e.type = "disabled"
            e.bottomInfo="已打卡"

        }
    })
    return e
}
let cnum=(checkedList)=>{
   return checkedList.length
}