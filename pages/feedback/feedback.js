//获取应用实例
Page({
   data: {
      freeText: '',
      imgList: '',
      length: 0,
      input: 'false',
      text: '请填写您的意见反馈',
      fileList: [
        
      ],
   },

   onchange(event0) {
      var textLength = event0.detail.length
      this.setData({
         freeText: event0.detail,
         length: textLength
      })
     
   },
   afterRead(event) {
      const { file } = event.detail;
      var {fileList} = this.data;
      const fileObj = {url:file.url}
      console.log(file)
      fileList.push(fileObj)
      this.setData({fileList:fileList})
      console.log(this.data.fileList)
     },
     Delete(event){
         const url = event.detail.file.url
         const {fileList} = this.data
         const newList = fileList.filter((item)=>{
             return item.url!==url
         })
         this.setData({fileList:newList})
     }

})