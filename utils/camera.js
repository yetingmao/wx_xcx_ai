function _takePhoto(){
   const ctx = wx.createCameraContext()
   console.log("_takePhoto",ctx);
   ctx.takePhoto({
    quality: 'high',
    success:(res)=>{
      console.log("success",res);
    },
    fail:(res)=>{
      console.log("fail",res);
    },
    complete:(res)=>{
      console.log("complete",res);
    }
   });
}

module.exports = {
  _takePhoto
}