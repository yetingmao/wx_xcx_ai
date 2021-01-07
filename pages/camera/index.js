import { _takePhoto } from "../../utils/index"
Page({
  data: {
    showSheet:false,
  },
  //事件处理函数
  onLoad: function (query) {
  },

    //选择底部上传选项
    setTakePhoto: function (e) {
        _takePhoto()
    },
})