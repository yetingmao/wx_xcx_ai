import {
  Config
} from "../config/index";
const {
  BASE_URL
} = Config;

function upload(opt, fn) {
  const {
    url,
    imgUrl,
    model
  } = opt;
  const _ = {};
  wx.uploadFile({
    url: BASE_URL + url, //仅为示例，非真实的接口地址
    filePath: imgUrl,
    name: 'file',
    formData: {
      'model': model
    },
    success: (res) => {
      if(res.statusCode===200){
        if(typeof res.data==="string"){
          _.data = JSON.parse(res.data) ;
        }else{
          _.data = res.data;
        }
      }else{
        console.log("uploadFile fail", res);
        _.error=res;
      }
    },
    fail: (res) => {
      console.log("uploadFile fail", res);
      _.error = res;
    },
    complete: (res) => {
      fn(_)
    }
  })
}

function request(opt, fn) {

}
module.exports = {
  upload,
  request
}