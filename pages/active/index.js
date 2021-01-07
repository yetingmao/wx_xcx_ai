import { _takePhoto } from "../../utils/index"
Page({
  data: {
    title: "",
    model: "",
    imgUrl:"https://img.yzcdn.cn/vant/cat.jpeg",
    showSheet:false,
    sheetActions:[
      {
        name: '拍照',
        key:"takePhoto",
      },
      {
        name: '从手机相册里选择',
        key:"selectPhoto",
      },
    ]
  },
  //事件处理函数
  onLoad: function (query) {
    const {
      name,
      model
    } = query;
    this.setData({
      title: name || "1",
      model: model || "12"
    });
  },
  //点击上传图片按钮或者取消
  setShowSheet: function () {
    this.setData({
      showSheet: !this.data.showSheet
    });
  },
    //选择底部上传选项
    setTakePhoto: function (e) {
      const { key }=e.detail;
      this.setShowSheet()
      if(key==="takePhoto"){
        wx.navigateTo({
          url: '/pages/camera/index',
        })
      }
    },
})