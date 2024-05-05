import axios from 'axios'

axios.defaults.baseURL="/api";
// axios.defaults.timeout=5000

axios.interceptors.request.use(config => {
    return config;
},err=>{
    console.log("请求拦截=》",err);
    return err;
})

axios.interceptors.response.use(res =>{
    console.log("响应拦截=》",res.data);
    if (res.data.success == false)
    {
        Message({
            message:res.data.data.message + '请重试',
            type:'warning'
        });
    }
    return res ? res.data : res;
},err => {
    console.log(err);
    console.log("响应拦截错误完整信息=>",err.response);
    throw err;
})