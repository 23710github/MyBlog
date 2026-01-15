import axios from "axios"


const instance = axios.create({
  baseURL: "http://localhost:9002/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const Get=(url:string,params:object)=>{
  return  instance.get(url,{params})
}


export const Post=(url:string,params:object)=>{
  
  return  instance.post(url,params)
}