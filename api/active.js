import {
  upload,
  request
} from "../utils/index";

export function compute(opt,fn){
  upload({...opt,url:"/ai"},(res)=>{
    fn(res.error,res.data)
  })
}