//index.js
//获取应用实例
const app = getApp()
import {formatTime } from "../../utils/index"
import {SKILLS} from "../../config/index"

Page({
  data: {
    SKILLS,
    tabNumber: 0,
    show: false,
  },
  //事件处理函数
  onLoad: function () {
  },
  //扫码
  switchTab: function (e) {
    console.log(e)
  },
})