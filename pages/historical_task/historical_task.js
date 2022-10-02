// pages/histroy/histroy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: [
      '完成时间', '12月09日', '12月08日', '12月07日', '12月06日', '12月05日', '12月04日', '12月03日', '12月02日', '12月01日',
    ],
    street: [
      '工作街道', '甜心街道', '长安街道', '雪宫街道', '古陌街道',
    ],
    type: [
      '垃圾类型', '可回收垃圾', '厨余垃圾', '其他垃圾', '有害垃圾'
    ],
    urls: {
      'Historical completion': '/pages/task_completion/task_completion'
    }
  },
  goto: function () {
    wx.navigateTo({
      url: this.data.urls['Historical completion'],
    })
  }
})