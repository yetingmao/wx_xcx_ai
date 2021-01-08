function _takePhoto(fn){
   const ctx = wx.createCameraContext();
   const _={};
   ctx.takePhoto({
    quality: 'high',
    success:(res)=>{
      _.data=res;
    },
    fail:(res)=>{
      console.log("_takePhoto fail",res);
      _.error=res;
    },
    complete:(res)=>{
      fn(_.error,_.data)
    }
   });
}
function chooseImage(fn){
  const _={};
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (res) {
      _.data=res;
    },
    fail:(res)=>{
      console.log("chooseImage fail",res);
      _.error=res;
    },
    complete:(res)=>{
      fn(_.error,_.data)
    }
  })
}

module.exports = {
  chooseImage
}