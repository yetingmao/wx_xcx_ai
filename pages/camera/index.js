import {
  _takePhoto
} from "../../utils/index"
import Toast from '../../components/toast/toast';
Page({
  data: {
    take: true,
    tempImage: "",
  },
  //事件处理函数
  onLoad: function (query) {},

  //选择底部上传选项
  setTakePhoto: function () {
    _takePhoto((error, data) => {
      if (error) {
        Toast.fail('调用摄像头失败');
      } else {
        const {
          tempImagePath
        } = data;
        this.setData({
          tempImage: tempImagePath,
          take: false,
        })
      }
    })
  },
  //选择底部上传选项
  reTakePhoto: function () {
    this.setData({
      tempImage: "",
      take: true,
    })
  },
  //选择底部上传选项
  goActive: function () {
    const name = wx.getStorageSync('name');
    const model = wx.getStorageSync('model');
    wx.redirectTo({
      url: `/pages/active/index?imgUrl=${this.data.tempImage}&name=${name}&model=${model}`
    })
  },
})