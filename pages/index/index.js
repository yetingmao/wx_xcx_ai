//index.js
//获取应用实例
const app = getApp()
import {formatTime } from "../../utils/index"

Page({
  data: {
    tabNumber: 1,
    show: false,
  },
  //事件处理函数
  onLoad: function () {
    this.setData({
    
    })
  },
  //扫码
  switchTab: function (e) {
    console.log(e)
  },
})